import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Categories } from '../models/categories.model';
import { Produits } from '../models/produit.model';
import { ProduitService } from '../services/produits.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css'],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produits();
  categories!: Categories[];
  updateIdCat!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
    });
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updateIdCat = this.currentProduit.categories.idCat;
      });
  }
  modifierProduit() {
    this.currentProduit.categories = this.categories.find(
      (cats) => cats.idCat === this.updateIdCat
    )!;
    this.produitService
      .modifierProduit(this.currentProduit)
      .subscribe((prod) => {
        this.router.navigate(['produits']);
      });
  }
}
