import { Categories } from './categories.model';
export class CategorieWrapper {
  _embedded!: { categories: Categories[] };
}
