import type { IncomeInterface } from '@pocketpal/contracts';
import { CurrencyEnum , UserInterface } from '@pocketpal/contracts';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseDto } from '../../generic/base.dto';
import { UserDto } from '../../user/dto/user.dto';


@Entity('incomes')
export class IncomeDto extends BaseDto implements IncomeInterface {
  @Column('text', { default: '' })
  amount!: number;

  @Column('text', { default: '' })
  description!: string;

  @Column('text', { default: '' })
  icon!: string;

  @Column('text', { default: '' })
  paymentMethod!: string;

  @Column('enum', { enum: CurrencyEnum, default: CurrencyEnum.EUR, enumName: 'currency_enum' })
  currency!: CurrencyEnum;

  @ManyToOne(() => UserDto, (user) => user.incomes)
  @JoinColumn({ name: 'user_id' })
  user!: UserInterface;
}