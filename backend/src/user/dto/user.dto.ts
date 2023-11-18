import { CategoryInterface, CurrencyEnum, ExpenseInterface, IncomeInterface, UserInterface } from '@pocketpal/contracts';
import { BaseDto } from '../../generic/base.dto';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CategoryDto } from '../../category/dto/category.dto';
import { IncomeDto } from '../../income/dto/income.dto';
import { ExpenseDto } from '../../expense/dto/expense.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

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
