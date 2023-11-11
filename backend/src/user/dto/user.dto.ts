import {
  CategoryInterface,
  CurrencyEnum,
  ExpenseInterface,
  IncomeInterface,
  UserInterface
} from '@pocketpal/contracts';
import { BaseDto } from '../../generic/base.dto';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CategoryDto } from '../../category/dto/category.dto';
import { IncomeDto } from '../../income/dto/income.dto';
import { ExpenseDto } from '../../expense/dto/expense.dto';

@Entity('users')
export class UserDto extends BaseDto implements UserInterface {
  @Column('text', { default: '' })
  name!: string;

  @Column('text', { default: '' })
  surname!: string;

  @Column('text', { default: '' })
  @Index({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column('enum', { enum: CurrencyEnum, default: CurrencyEnum.EUR, enumName: 'currency_enum' })
  currency!: CurrencyEnum;

  @OneToMany(() => CategoryDto, (category) => category.user)
  categories!: CategoryInterface[]


  @OneToMany(() => IncomeDto, (incomes) => incomes.user)
  incomes!: IncomeInterface[];

  @OneToMany(() => ExpenseDto, (expenses) => expenses.user)
  expenses!: ExpenseInterface[];
}