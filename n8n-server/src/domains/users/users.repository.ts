import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

import { IUsersRepository } from './models/users.model';
import { CreateUserDto, UpdateUserDto } from './models/users.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(newUser: CreateUserDto): Promise<UserDocument> {
    try {
      const result = await this.userModel.create(newUser);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async readUser(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findById(id);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async readUsers(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserByEmail(email: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id: string, newUser: UpdateUserDto): Promise<UserDocument> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, newUser);
      return updatedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      await this.userModel.findByIdAndDelete(id);
      return 'User deleted';
    } catch (error) {
      throw new Error(error);
    }
  }
}
