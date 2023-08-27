import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { NodesController } from './types/nodes/nodes.controller';
import { CredentialsController } from './types/credentials/credentials.controller';
import { CredentialsService } from './types/credentials/credentials.service';
import { NodesModule } from './types/nodes/nodes.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProjectModule,
    NodesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, NodesController, CredentialsController],
  providers: [AppService, CredentialsService],
})
export class AppModule { }