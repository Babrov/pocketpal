import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [],
  providers: [],
  imports: [CategoryModule, ExpenseModule, IncomeModule,UserModule]
})
export class AppModule {
}