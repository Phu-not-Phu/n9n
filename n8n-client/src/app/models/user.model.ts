export interface UserModel {
  id: string;
  username: string;
  email: string;
  password: string;

  googleID: string;
  githubID: string;

  createAt?: Date;
  updateAt?: Date;
  isDeleted: boolean;
}

export type UserDTO = Exclude<UserModel, ['id', 'password', 'isDeleted']>;
