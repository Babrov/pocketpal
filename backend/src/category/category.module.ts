import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryController } from './category.controller';
import { CategoryDto } from './dto/category.dto';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDto])],
  providers: [],
  controllers: [CategoryController]
})
export class CategoryModule {}
