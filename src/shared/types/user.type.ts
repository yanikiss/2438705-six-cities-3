import {UserType} from './user-type.enum';

export type User = {
  name: string;
  email: string;
  avatarUrl?: string;
  type: UserType;
}
