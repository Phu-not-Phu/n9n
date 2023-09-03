import { Body, Controller, Inject, Post } from '@nestjs/common';
import { HttpResponse } from 'src/models/response.model';

import { IUsersService } from './models/users.model';
import { IUserAuthService } from 'src/models/auth.model';
import { LoginUserDTO, RegisterUserDTO } from '../../models/auth.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(IUsersService) private usersService: IUsersService,
    @Inject(IUserAuthService) private userAuthService: IUserAuthService,
  ) {}
  //----------------User----------------

  //----------------Auth----------------
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDTO) {
    const result = await this.userAuthService.login(loginUserDto);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDTO) {
    const result = await this.userAuthService.register(registerUserDto);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Post('verify')
  async verify(@Body() token: string) {
    const result = await this.userAuthService.verify(token);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Post('getUserContext')
  async getUserContext(@Body() token: string) {
    const result = await this.userAuthService.getUserContext(token);
    return new HttpResponse(result.code, result.data, result.error);
  }
}
