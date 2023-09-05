import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { HttpResponse } from 'src/models/response.model';

import { IUsersService } from './models/users.model';
import { IUserAuthService } from 'src/models/auth.model';
import { LoginUserDTO, RegisterUserDTO } from '../../models/auth.dto';
import { UpdateUserDto } from './models/users.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(IUsersService) private usersService: IUsersService,
    @Inject(IUserAuthService) private userAuthService: IUserAuthService,
  ) {}
  //----------------User----------------

  @Put('update')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Query('id') id: string,
  ) {
    const result = await this.usersService.updateUser(id, updateUserDto);

    if (result.error) {
      return HttpResponse.badRequest(result.data, result.error);
    }

    return HttpResponse.created(result.data, result.error);
  }

  //----------------Auth----------------
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDTO) {
    const result = await this.userAuthService.login(loginUserDto);

    if (result.error) {
      return HttpResponse.badRequest(result.data, result.error);
    }

    return HttpResponse.ok(result.data, result.error);
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDTO) {
    const result = await this.userAuthService.register(registerUserDto);

    if (result.error) {
      return HttpResponse.badRequest(result.data, result.error);
    }

    return HttpResponse.created(result.data, result.error);
  }

  @Put('verify')
  async verify(@Request() request: Request) {
    const token = request.headers['authorization'].split(' ')[1];
    const result = await this.userAuthService.verify(token);

    if (result.error) {
      return HttpResponse.badRequest(result.data, result.error);
    }

    return HttpResponse.ok(result.data, result.error);
  }

  @Get('me')
  async getUserContext(@Request() request: Request) {
    const token = request.headers['authorization'].split(' ')[1];

    const result = await this.userAuthService.getUserContext(token);

    if (result.error) {
      return HttpResponse.badRequest(result.data, result.error);
    }

    return HttpResponse.ok(result.data, result.error);
  }
}
