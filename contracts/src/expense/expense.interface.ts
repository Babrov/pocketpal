import { CurrencyEnum } from '../enum/currency.enum';
import { UserInterface } from '../user';
import { BaseInterface } from '../generic';

export interface ExpenseInterface extends BaseInterface {
  amount: number;
  icon: string;
  description: string;
  // TODO: add enum for payment method
  paymentMethod: string;
  currency: CurrencyEnum;
  user: UserInterface;
}