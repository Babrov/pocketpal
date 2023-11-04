import { CurrencyEnum } from '../enum/currency.enum';

export interface ExpenseInterface {
  amount: number;
  currency: CurrencyEnum;
}