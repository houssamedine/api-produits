import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from '../models/produit.model';
import { ProduitService } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits!: Produits[];

  constructor(private router: Router, private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chagerProduit();
  }

  chagerProduit() {
    this.produitService.listProduits().subscribe((prods) => {
      this.produits = prods;
    })!;
  }

  supprimerProduit(prod: Produits) {
    let conf = confirm('Etes-vous Sur de Supprimer ?');
    if (conf)
      this.produitService.supprimerProduit(prod.idProduit).subscribe(() => {
        this.chagerProduit();
      });
  }
}
