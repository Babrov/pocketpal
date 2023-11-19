import type { CategoryInterface, ExpenseInterface, IncomeInterface, UserInterface } from '@pocketpal/contracts';
import { CurrencyEnum } from '@pocketpal/contracts';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Index, OneToMany } from 'typeorm';

import { CategoryDto } from '../../category/dto/category.dto';
import { ExpenseDto } from '../../expense/dto/expense.dto';
import { BaseDto } from '../../generic/base.dto';
import { IncomeDto } from '../../income/dto/income.dto';

@Entity('users')
export class UserDto extends BaseDto implements UserInterface {
  @Column('text', { default: '' })
  @IsString()
  name!: string;

  @Column('text', { default: '' })
  @IsNotEmpty()
  surname!: string;

  @Column('text', { default: '' })
  @Index({ unique: true })
  @IsNotEmpty()
  email!: string;

  @Column('text', { default: '' })
  @IsNotEmpty()
  password!: string;

  @Column('enum', { enum: CurrencyEnum, default: CurrencyEnum.EUR, enumName: 'currency_enum' })
  @IsEnum(CurrencyEnum)
  currency!: CurrencyEnum;

  @OneToMany(() => CategoryDto, category => category.user)
  categories!: CategoryInterface[];

  @OneToMany(() => IncomeDto, incomes => incomes.user)
  incomes!: IncomeInterface[];

  @OneToMany(() => ExpenseDto, expenses => expenses.user)
  expenses!: ExpenseInterface[];
}
