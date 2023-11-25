import { ConflictException, Injectable } from '@nestjs/common';
import type { UserCreateInterface, UserInterface } from '@pocketpal/contracts';
import { filterWithException, rethrowException } from '@rnw-community/rxjs-errors';
import { isDefined } from '@rnw-community/shared';
import { hash } from 'bcrypt';
import type { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly hashRounds = 10;

  constructor(private readonly users: UserService) {}

  register(body: UserCreateInterface): Observable<Omit<UserInterface, 'password'>> {
    return this.users.findByEmail$(body.email).pipe(
      filterWithException(foundUser => !isDefined(foundUser), 'User with such email already exists'),
      concatMap(() => hash(body.password, this.hashRounds)),
      concatMap(hashedPwd => this.users.create$({ ...body, password: hashedPwd })),
      map(user => ({ ...user, password: undefined })),
      rethrowException('Failed registering user', msg => msg, ConflictException)
    );
  }
}
