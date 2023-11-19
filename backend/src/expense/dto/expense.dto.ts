import type { ExpenseInterface } from '@pocketpal/contracts';
import { CurrencyEnum , UserInterface } from '@pocketpal/contracts';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseDto } from '../../generic/base.dto';
import { UserDto } from '../../user/dto/user.dto';

@Entity('expenses')
export class ExpenseDto extends BaseDto implements ExpenseInterface {
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

  @ManyToOne(() => UserDto, (user) => user.expenses)
  @JoinColumn({ name: 'user_id' })
  user!: UserInterface;
}