import { Controller } from '@nestjs/common';

@Controller({ version: '1', path: 'users' })
export class UserController {
  constructor() {}
}
