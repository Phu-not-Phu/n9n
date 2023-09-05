import { Response } from 'src/models/response.model';
import { UserDocument } from '../schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './users.dto';

export interface IUsersService {
  createUser(newUser: CreateUserDto): Promise<string>;
  readUser(id: string): Promise<UserDocument>;
  readUsers(): Promise<UserDocument[]>;
  updateUser(
    id: string,
    newUser: UpdateUserDto,
  ): Promise<Response<UserDocument>>;
  deleteUser(id: string): Promise<string>;
}

export interface IUsersRepository {
  createUser(newUser: CreateUserDto): Promise<UserDocument>;
  readUser(id: string): Promise<UserDocument>;
  readUsers(): Promise<UserDocument[]>;
  findUserByEmail(email: string): Promise<UserDocument>;
  updateUser(id: string, newUser: UpdateUserDto): Promise<UserDocument>;
  deleteUser(id: string): Promise<string>;
}

export const IUsersService = Symbol('IUsersService');
export const IUsersRepository = Symbol('IUsersRepository');
