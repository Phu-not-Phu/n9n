import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class CheckUserDto extends PartialType(CreateUserDto) {
  githubID?: string;
  googleID?: string;
  username?: string;
  email?: string;
}
