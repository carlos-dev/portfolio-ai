import { Injectable } from '@nestjs/common'
import { PrismaProvider } from '../db/prisma.provider'

@Injectable()
export class ProjectProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async getProjects() {
		return this.prisma.project.findMany()
	}

	async getProjectById(id: number) {
		return this.prisma.project.findUnique({
			where: { id },
			include: { technologies: true },
		})
	}
}
