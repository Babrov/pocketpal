import type { UserInterface } from './user.interface';

export const UserCreateFields = ['email', 'password', 'name', 'surname'] as const;

export type UserCreateInterface = Pick<UserInterface, (typeof UserCreateFields)[number]>;
