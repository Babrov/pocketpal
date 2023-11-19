import { Injectable } from '@nestjs/common';
import type { UserInterface } from '@pocketpal/contracts';
import type { Observable } from 'rxjs';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create$(body: any): Observable<UserInterface> {
    return this.repository.create$(body);
  }
}
