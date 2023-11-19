import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.auth.register(body);
  }

  @Post('login')
  login(@Body() body: any) {
    return void this.auth.login(body);
  }
}
