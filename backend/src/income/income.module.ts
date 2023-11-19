import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IncomeDto } from './dto/income.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncomeDto]),
  ],
  providers: [],
  controllers: []
})
export class IncomeModule {
}