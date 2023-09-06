export interface UserModel {
  _id: string;
  uid: string;
  username: string;

  displayName?: string;
  firstName?: string;
  lastName?: string;

  email: string;
  password?: string;

  googleID: string;
  githubID: string;

  createAt?: Date;
  updateAt?: Date;
  isDeleted: boolean;
}

export type UserDTO = Omit<UserModel, 'id' | 'password' | 'isDeleted'>;
export type UserCreateDTO = Omit<
  UserDTO,
  | 'id'
  | 'uid'
  | 'displayName'
  | 'createAt'
  | 'updateAt'
  | 'isDeleted'
  | 'githubID'
  | 'googleID'
>;
