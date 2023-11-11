import { Module } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto])
  ],
  controllers: [],
  providers: []
})
export class UserModule {

}