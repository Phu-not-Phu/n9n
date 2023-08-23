export class CreateUserDto {
  id: string;
  username: string;
  password: string;
  email: string;
  googleID: string;
  githubID: string;
  createAt: Date;
  updateAt: Date;
  isDeleted: boolean;
}
