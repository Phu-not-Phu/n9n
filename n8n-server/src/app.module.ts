import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { NodesController } from './types/nodes/nodes.controller';
import { CredentialsController } from './types/credentials/credentials.controller';
import { CredentialsService } from './types/credentials/credentials.service';
import { NodesService } from './types/nodes/nodes.service';
import { NodesModule } from './types/nodes/nodes.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProjectModule,
  ],
  controllers: [AppController, NodesController, CredentialsController],
  providers: [AppService, CredentialsService],
})
export class AppModule { }