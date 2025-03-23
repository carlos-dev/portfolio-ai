import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication } from '@nestjs/common'

let app: INestApplication

async function createApp() {
	if (!app) {
		app = await NestFactory.create(AppModule)
		app.enableCors({
			origin: '*',
			methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
			allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
		})
	}
	return app
}

async function bootstrap() {
	const app = await createApp()
	await app.listen(process.env.PORT ?? 3000)
}

// Executar em ambiente normal (não-serverless)
if (
	process.env.NODE_ENV !== 'production' ||
	process.env.VERCEL_ENV !== 'production'
) {
	void bootstrap()
}

// Exportar para Vercel serverless
export default async (req, res) => {
	try {
		const app = await createApp()
		await app.init()

		// Get the HTTP adapter instead of the server
		const httpAdapter = app.getHttpAdapter()
		// Use the HTTP adapter to handle the request
		const instance = httpAdapter.getInstance() as {
			handle: (req: any, res: any) => void
		}
		return instance.handle(req, res)
	} catch (error) {
		console.error('error handling request', error)
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		res.status(500).send('Internal server error')
	}
}
