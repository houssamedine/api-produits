import { Injectable } from '@angular/core';
import { Produits } from '../models/produit.model';
import { Categories } from '../models/categories.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, catApiURL } from '../config';
import { CategorieWrapper } from '../models/categorieWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produits[];
  // categories: Categories[];

  constructor(private http_: HttpClient) {}
  /**Web Service Avec HttpRest */
  listProduits(): Observable<Produits[]> {
    return this.http_.get<Produits[]>(apiURL);
  }

  addProduit(prod: Produits): Observable<Produits> {
    return this.http_.post<Produits>(apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http_.delete(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produits> {
    const url = `${apiURL}/${id}`;
    return this.http_.get<Produits>(url, httpOptions);
  }

  modifierProduit(prod: Produits): Observable<Produits> {
    return this.http_.put<Produits>(apiURL, prod, httpOptions);
    this.addProduit(prod);
    this.trierProduits();
  }

  // listeCategory(): Observable<Categories[]> {
  //   return this.http_.get<Categories[]>(catApiURL);
  // }

  listeCategories(): Observable<CategorieWrapper> {
    return this.http_.get<CategorieWrapper>(catApiURL);
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }
}
