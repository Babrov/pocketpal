import type { CurrencyEnum } from '../enum/currency.enum';
import type { BaseInterface } from '../generic';
import type { UserInterface } from '../user';

export interface ExpenseInterface extends BaseInterface {
  amount: number;
  icon: string;
  description: string;
  // TODO: add enum for payment method
  paymentMethod: string;
  currency: CurrencyEnum;
  user: UserInterface;
}