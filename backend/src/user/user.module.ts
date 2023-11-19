import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserDto } from './dto/user.dto';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDto])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
