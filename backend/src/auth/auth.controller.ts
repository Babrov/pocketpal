import { Body, Controller, Post } from '@nestjs/common';
import type { AuthControllerInterface, UserInterface } from '@pocketpal/contracts';
import { Observable } from 'rxjs';

import { UserCreateDto } from '../user/dto/user-create.dto';

import { AuthService } from './auth.service';

@Controller({ version: '1', path: 'auth' })
export class AuthController implements AuthControllerInterface {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() body: UserCreateDto): Observable<Omit<UserInterface, 'password'>> {
    return this.auth.register(body);
  }

  @Post('login')
  login(@Body() _: any) {}
}
