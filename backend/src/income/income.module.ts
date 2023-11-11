import { Module } from '@nestjs/common';
import { IncomeDto } from './dto/income.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncomeDto]),
  ],
  providers: [],
  controllers: []
})
export class IncomeModule {
}