import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDto } from './dto/category.dto';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDto])],
  providers: [],
  controllers: [CategoryController]
})
export class CategoryModule {}
