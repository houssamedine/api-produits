import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories.model';
import { Produits } from '../models/produit.model';
import { ProduitService } from '../services/produits.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produits();
  categories!: Categories[];
  newIdCat!: number;
  message!: string;
  newCategorie!: Categories;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit() {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  ajouterProduit() {
    this.newProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.newIdCat
    )!;
    this.produitService.addProduit(this.newProduit).subscribe((prods) => {
      // console.log(prods);
      this.router.navigate(['produits']);
    });
  }
}
