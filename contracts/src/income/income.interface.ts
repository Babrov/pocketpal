import { UserInterface } from '../user';
import { BaseInterface } from '../generic';
import { CurrencyEnum } from '../enum/currency.enum';

export interface IncomeInterface extends BaseInterface {
  amount: number;
  icon: string;
  description: string;
  // TODO: add enum for payment method
  paymentMethod: string;
  currency: CurrencyEnum;
  user: UserInterface;
}