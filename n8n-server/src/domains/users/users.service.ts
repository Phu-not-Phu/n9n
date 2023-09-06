import { Inject, Injectable } from '@nestjs/common';

import { IUsersRepository, IUsersService } from './models/users.model';
import { UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './models/users.dto';
import { Response } from 'src/models/response.model';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(IUsersRepository) private usersRepository: IUsersRepository,
  ) { }

  createUser(newUser: CreateUserDto): Promise<string> {
    throw new Error('Method not implemented.');
  }

  readUser(id: string): Promise<UserDocument> {
    throw new Error('Method not implemented.');
  }

  readUsers(): Promise<UserDocument[]> {
    throw new Error('Method not implemented.');
  }

  async updateUser(
    id: string,
    newUser: UpdateUserDto,
  ): Promise<Response<UserDocument>> {
    if (!id) {
      return {
        code: 400,
        data: null,
        error: new Error('ID is required'),
      };
    }

    newUser.updateAt = new Date().toISOString();
    newUser.displayName = newUser.firstName + ' ' + newUser.lastName;

    const result = await this.usersRepository.updateUser(id, newUser);

    if (!result) {
      return {
        code: 400,
        data: null,
        error: new Error('User not found'),
      };
    }

    return {
      code: 201,
      data: result,
      error: null,
    };
  }

  deleteUser(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
