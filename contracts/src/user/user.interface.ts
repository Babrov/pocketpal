import type { CurrencyEnum } from '../enum/currency.enum';
import type { BaseInterface } from '../generic';

export interface UserInterface extends BaseInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  currency: CurrencyEnum;
}