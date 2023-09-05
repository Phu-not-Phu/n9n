import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { Response } from 'src/models/response.model';

import { IUserAuthService } from 'src/models/auth.model';
import { IUsersRepository } from '../../domains/users/models/users.model';

import { LoginUserDTO, RegisterUserDTO } from '../../models/auth.dto';
import { CreateUserDto } from '../../domains/users/models/users.dto';
import { UserDocument } from '../../domains/users/schemas/user.schema';

@Injectable()
export class UserAuthService implements IUserAuthService {
  constructor(
    @Inject(IUsersRepository) private usersRepository: IUsersRepository,
    private jwtService: JwtService,
  ) {}

  async decodeToken(token: string): Promise<any> {
    try {
      const decoded = await this.jwtService.verifyAsync(token);

      if (decoded) {
        return decoded;
      }

      throw new Error('Invalid token');
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async getUserContext(token: string): Promise<Response<UserDocument>> {
    try {
      const decoded = await this.jwtService.verifyAsync(token);

      if (decoded) {
        const user = await this.usersRepository.findUserByEmail(decoded.email);

        return {
          code: 200,
          data: user,
          error: null,
        };
      }
    } catch (error) {
      return {
        code: 400,
        data: null,
        error: new Error('Invalid token'),
      };
    }
  }

  async verify(token: string): Promise<Response<boolean>> {
    try {
      const decoded = await this.jwtService.verifyAsync(token);

      if (decoded) {
        return {
          code: 200,
          data: true,
          error: null,
        };
      }
    } catch (error) {
      return {
        code: 400,
        data: false,
        error: new Error('Invalid token'),
      };
    }
  }

  async login(loginUserDto: LoginUserDTO): Promise<Response<string>> {
    const user = await this.usersRepository.findUserByEmail(loginUserDto.email);

    if (!user) {
      return {
        code: 400,
        data: null,
        error: new Error('This email is not registered'),
      };
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
        code: 400,
        data: null,
        error: new Error('Invalid password'),
      };
    }

    const payload = { email: user.email, sub: user.uid };

    return {
      code: 200,
      data: await this.jwtService.signAsync(payload),
      error: null,
    };
  }

  async register(registerUserDto: RegisterUserDTO): Promise<Response<string>> {
    const user = await this.usersRepository.findUserByEmail(
      registerUserDto.email,
    );

    if (user) {
      return {
        code: 400,
        data: null,
        error: new Error('This email is already registered'),
      };
    }

    if (
      registerUserDto.password === undefined ||
      registerUserDto.password === ''
    ) {
      return {
        code: 400,
        data: null,
        error: new Error('Password is required'),
      };
    }

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

    let tempUserObject: CreateUserDto = {
      uid: uuidv4(),
      username: registerUserDto.username,
      firstName: registerUserDto.firstName,
      lastName: registerUserDto.lastName,
      displayName: registerUserDto.firstName + ' ' + registerUserDto.lastName,
      email: registerUserDto.email,
      password: hashedPassword,
    };

    const newUser = await this.usersRepository.createUser(tempUserObject);

    const payload = { email: newUser.email, sub: newUser.uid };

    return {
      code: 201,
      data: await this.jwtService.signAsync(payload),
      error: null,
    };
  }
}
