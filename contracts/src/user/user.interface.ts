import { BaseInterface } from '../generic';
import { CurrencyEnum } from '../enum/currency.enum';

export interface UserInterface extends BaseInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  currency: CurrencyEnum;
}