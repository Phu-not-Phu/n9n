import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { timeStamp } from 'console';
import { CheckUserDto } from './dto/check-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const creatUser = await this.userModel.create(createUserDto);
    return creatUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    const data = await this.userModel.find().exec();
    return data;
  }

  async getUser(uid: string): Promise<UserDocument> {
    const findUser = await this.userModel.findOne({ uid: uid }).exec();
    return findUser;
  }

  async checkUserExisted(checkUserDto: CheckUserDto): Promise<boolean> {
    const checkUserExisted = await this.userModel
      .aggregate([
        {
          $match: {
            $or: [
              { username: checkUserDto.username },
              { email: checkUserDto.email },
              { googleID: checkUserDto.googleID },
              { githubID: checkUserDto.githubID },
            ],
          },
        },
      ])
      .exec();

    return checkUserExisted.length === 0 ? false : true;
  }

  async findOne(id: string): Promise<User> {
    const findId = await this.userModel.findOne({ id: id }).exec();
    return findId;
  }

  async remove(id: string): Promise<UserDocument> {
    const deleteUser = await this.userModel.findOneAndDelete({ id: id }).exec();
    return deleteUser;
  }

  async updateUsername(
    id: string,
    username: string,
    UpdateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    UpdateUserDto.updateAt = new Date();
    const updateUser = await this.userModel
      .findOneAndUpdate({ id: id }, UpdateUserDto, { new: true })
      .exec();
    return updateUser;
  }
}
