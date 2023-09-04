import { Inject, Injectable } from '@nestjs/common';

import { IUsersRepository, IUsersService } from './models/users.model';
import { UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './models/users.dto';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(IUsersRepository) private usersRepository: IUsersRepository,
  ) {}

  createUser(newUser: CreateUserDto): Promise<string> {
    throw new Error('Method not implemented.');
  }

  readUser(id: string): Promise<UserDocument> {
    throw new Error('Method not implemented.');
  }

  readUsers(): Promise<UserDocument[]> {
    throw new Error('Method not implemented.');
  }

  updateUser(id: string, newUser: UpdateUserDto): Promise<UserDocument> {
    throw new Error('Method not implemented.');
  }

  deleteUser(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
