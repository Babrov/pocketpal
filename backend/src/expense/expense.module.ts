import { Module } from "@nestjs/common";
import { ExpenseDto } from './dto/expense.dto';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([ExpenseDto]),
  ],
  providers: [],
  controllers: []
})
export class ExpenseModule {
}