import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

import { UsersController } from './users.controller';

import { IUsersService, IUsersRepository } from './models/users.model';
import { IUserAuthService } from 'src/models/auth.model';

import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserAuthService } from '../../core/services/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'nodes-types' },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: IUsersService,
      useClass: UsersService,
    },
    {
      provide: IUsersRepository,
      useClass: UsersRepository,
    },
    {
      provide: IUserAuthService,
      useClass: UserAuthService,
    },
  ],
  exports: [IUsersService, IUsersRepository, IUserAuthService],
})
export class UsersModule {}
