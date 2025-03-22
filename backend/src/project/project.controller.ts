import { Controller, Get, Param } from '@nestjs/common'
import { ProjectProvider } from './project.prisma'

@Controller('projects')
export class ProjectController {
	constructor(private readonly repository: ProjectProvider) {}

	@Get()
	async getProjects() {
		return this.repository.getProjects()
	}

	@Get(':id')
	async getProjectById(@Param('id') id: string) {
		return this.repository.getProjectById(Number(id))
	}
}
