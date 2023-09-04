import { UserDocument } from 'src/domains/users/schemas/user.schema';
import { LoginUserDTO, RegisterUserDTO } from './auth.dto';
import { Response } from 'src/models/response.model';

export interface IUserAuthService {
  getUserContext(token: string): Promise<Response<UserDocument>>;
  verify(token: string): Promise<Response<boolean>>;
  login(loginUserDto: LoginUserDTO): Promise<Response<string>>;
  register(registerUserDto: RegisterUserDTO): Promise<Response<string>>;
}

export const IUserAuthService = Symbol('IUserAuthService');
