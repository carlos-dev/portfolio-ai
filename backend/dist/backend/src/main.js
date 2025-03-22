"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let app;
async function createApp() {
    if (!app) {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
        });
    }
    return app;
}
async function bootstrap() {
    const app = await createApp();
    await app.listen(process.env.PORT ?? 3000);
}
if (process.env.NODE_ENV !== 'production' ||
    process.env.VERCEL_ENV !== 'production') {
    void bootstrap();
}
async function handler(req, res) {
    const app = await createApp();
    await app.init();
    const server = app.getHttpServer();
    return server(req, res);
}
//# sourceMappingURL=main.js.map