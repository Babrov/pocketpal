import type { UserCreateInterface } from '../user';

export interface AuthControllerInterface {
  register: (body: UserCreateInterface) => any;
  login: (body: any) => any;
}
