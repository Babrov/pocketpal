import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // TODO: add config envs
      username: 'pocketpaldb',
      password: 'adminpocketpal',
      database: 'pocketpaldb',
      entities: [resolve(__dirname + '/**/*.dto{.ts,.js}')],
      migrations: [resolve(__dirname, '../migration/*.{ts,js}')],
      synchronize: false,
      autoLoadEntities: true,
      retryAttempts: 1,
      migrationsRun: true,
      keepConnectionAlive: true
    }),
    CategoryModule,
    ExpenseModule,
    IncomeModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
