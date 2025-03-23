import { Injectable } from '@nestjs/common'
import { PrismaProvider } from '../db/prisma.provider'

@Injectable()
export class TechnologyPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getTechnologies() {
		return this.prisma.technology.findMany()
	}

	async getHighLightedTechnologies() {
		return this.prisma.technology.findMany({
			where: {
				highlight: true,
			},
		})
	}
}
