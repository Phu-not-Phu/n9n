export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface RegisterUserDTO {
  email: string;
  password?: string;
  username: string;
  firstName: string;
  lastName: string;
}
