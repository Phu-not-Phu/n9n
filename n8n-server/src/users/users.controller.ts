import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  SerializeOptions,
  Put,
} from '@nestjs/common';

import { InterceptorForClassSerializer } from 'src/interceptors/serializer.interceptor';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CheckUserDto } from './dto/check-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @SerializeOptions({
    excludePrefixes: ['password', 'googleID', 'githubID', 'isDeleted'],
  })
  @UseInterceptors(InterceptorForClassSerializer)
  @Get('user')
  getUser(@Query('uid') uid: string) {
    return this.usersService.getUser(uid);
  }

  @Put('check')
  checkUserExisted(@Body() checkUserDto: CheckUserDto) {
    return this.usersService.checkUserExisted(checkUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUsername(
      id,
      updateUserDto.username,
      updateUserDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
