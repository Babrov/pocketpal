import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExpenseDto } from './dto/expense.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExpenseDto]),
  ],
  providers: [],
  controllers: []
})
export class ExpenseModule {
}