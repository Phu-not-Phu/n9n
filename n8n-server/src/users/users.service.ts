import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { timeStamp } from 'console';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createByMail(createUserDto: CreateUserDto): Promise<UserDocument> {
    let id = timeStamp.toString();
    createUserDto.id = id;
    createUserDto.createAt = new Date();
    createUserDto.updateAt = new Date();
    createUserDto.isDeleted = false;
    createUserDto.googleID = '';
    createUserDto.githubID = '';
    const creatUser = await this.userModel.create(createUserDto);
    return creatUser.save();
  }

  async createByGoogle(createUserDto: CreateUserDto): Promise<UserDocument> {
    let id = timeStamp.toString();
    createUserDto.id = id;
    createUserDto.createAt = new Date();
    createUserDto.updateAt = new Date();
    createUserDto.isDeleted = false;
    createUserDto.googleID = id;
    createUserDto.githubID = '';
    const creatUser = await this.userModel.create(createUserDto);
    return creatUser.save();
  }

  async createByGithub(createUserDto: CreateUserDto): Promise<UserDocument> {
    let id = timeStamp.toString();
    createUserDto.id = id;
    createUserDto.createAt = new Date();
    createUserDto.updateAt = new Date();
    createUserDto.isDeleted = false;
    createUserDto.googleID = '';
    createUserDto.githubID = id;
    const creatUser = await this.userModel.create(createUserDto);
    return creatUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    const data = await this.userModel.find().exec();
    return data;
  }

  async findOne(id: string): Promise<User> {
    const findId = await this.userModel.findOne({ id: id }).exec();
    return findId;
  }

  async remove(id: string): Promise<UserDocument> {
    const deleteUser = await this.userModel
      .findOneAndDelete({ id: id })
      .exec();
    return deleteUser;
  }

  async updateUsername(id: string, username: string, UpdateUserDto: UpdateUserDto): Promise<UserDocument>{
    UpdateUserDto.updateAt = new Date();
    const updateUser = await this.userModel.findOneAndUpdate({id: id}, UpdateUserDto, {new: true}).exec();
    return updateUser;
  }
}
