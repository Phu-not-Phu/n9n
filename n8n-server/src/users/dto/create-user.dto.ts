export class CreateUserDto {
  id: string;
  username: string;
  email: string;
  password: string;

  googleID: string;
  githubID: string;

  createAt: Date;
  updateAt: Date;
  isDeleted: boolean;
}
