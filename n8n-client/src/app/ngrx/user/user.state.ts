import { UserModel } from 'src/app/models/user.model';

export interface UserState {
  user: UserModel | null;
  token: string | null;

  isLoading: boolean;
  isLoadSuccess: boolean;

  isUpdating: boolean;
  isUpdateSuccess: boolean;

  error: Error | null;
}
