import { Injectable } from '@nestjs/common';
import { UserInterface } from '@pocketpal/contracts';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { defer, Observable } from 'rxjs';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserDto) private readonly repository: Repository<UserInterface>) {}

  create$(user: UserInterface): Observable<UserInterface> {
    return defer(() => this.repository.save(user));
  }
}
