import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserInterface } from '@pocketpal/contracts';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create$(body: any): Observable<UserInterface> {
    return this.repository.create$(body);
  }
}
