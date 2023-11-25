import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { UserCreateInterface, UserInterface } from '@pocketpal/contracts';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';
import { Repository } from 'typeorm';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserDto) private readonly repository: Repository<UserInterface>) {}

  findByEmail$(email: string): Observable<UserInterface | null> {
    return defer(() => this.repository.findOne({ where: { email } }));
  }

  create$(user: UserCreateInterface): Observable<UserInterface> {
    return defer(() => this.repository.save(user));
  }
}
