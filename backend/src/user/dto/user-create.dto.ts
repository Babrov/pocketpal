import { PickType } from '@nestjs/mapped-types';
import type { UserCreateInterface } from '@pocketpal/contracts';
import { UserCreateFields } from '@pocketpal/contracts';

import { UserDto } from './user.dto';

export class UserCreateDto extends PickType(UserDto, UserCreateFields) implements UserCreateInterface {}
