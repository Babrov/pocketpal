import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly users: UserService) {}

  register(body: any) {
    return this.users.create$(body);
  }

  login(body: any) {}
}
