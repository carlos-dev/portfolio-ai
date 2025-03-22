import { Module } from '@nestjs/common'
import { ProjectProvider } from './project.prisma'
import { ProjectController } from './project.controller'
import { DbModule } from '../db/db.module'

@Module({
	controllers: [ProjectController],
	providers: [ProjectProvider],
	imports: [DbModule],
})
export class ProjectModule {}
