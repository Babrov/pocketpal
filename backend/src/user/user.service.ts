import { Injectable } from '@nestjs/common';
import type { UserCreateInterface, UserInterface } from '@pocketpal/contracts';
import type { Observable } from 'rxjs';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  findByEmail$(email: string): Observable<UserInterface | null> {
    return this.repository.findByEmail$(email);
  }

  create$(body: UserCreateInterface): Observable<UserInterface> {
    return this.repository.create$(body);
  }
}
