import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { UserInterface } from '@pocketpal/contracts';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';
import { Repository } from 'typeorm';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserDto) private readonly repository: Repository<UserInterface>) {}

  create$(user: UserInterface): Observable<UserInterface> {
    return defer(async () => this.repository.save(user));
  }
}
