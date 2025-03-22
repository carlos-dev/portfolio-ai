import { Controller, Get } from '@nestjs/common'
import { Technology } from '@core'
import { TechnologyPrisma } from './technology.prisma'

@Controller('technologies')
export class TechnologyController {
	constructor(private readonly repository: TechnologyPrisma) {}

	@Get()
	async getTechnologies() {
		return this.repository.getTechnologies()
	}

	@Get('highlights')
	async getHighLightedTechnologies(): Promise<Technology[]> {
		return this.repository.getHighLightedTechnologies()
	}
}
