import { Categories } from './categories.model';

export class Produits {
  idProduit!: number;
  nomProduit!: string;
  prixProduit!: number;
  dateCreation!: Date;
  categorie!: Categories;
}
