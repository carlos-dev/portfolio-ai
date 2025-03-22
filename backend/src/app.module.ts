import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { DbModule } from './db/db.module'
import { ProjectModule } from './project/project.module'
import { TecnologyModule } from './tecnology/tecnology.module'

@Module({
	imports: [DbModule, ProjectModule, TecnologyModule],
	controllers: [AppController],
})
export class AppModule {}
