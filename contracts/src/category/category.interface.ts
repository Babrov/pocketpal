import { BaseInterface } from '../generic';

export interface CategoryInterface extends BaseInterface {
  name: string;
  description: string;
  // TODO: decide how to save icons for categories
  image: string;
}