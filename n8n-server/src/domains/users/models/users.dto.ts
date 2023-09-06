export interface UserDTO {
  id?: string;
  uid?: string;

  username: string;
  firstName: string;
  lastName: string;
  displayName: string;
  password: string;

  email: string;
  googleID?: string;
  githubID?: string;

  createAt?: string;
  updateAt?: string;
}

export type CreateUserDto = Omit<UserDTO, 'id' | 'createAt' | 'updateAt'>;
export type UpdateUserDto = Omit<UserDTO, 'id' | 'createAt'>;
