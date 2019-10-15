import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { IProduct, ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchTerm: string = '';
  public onlyFavorites: boolean = false;

  public products$!: Observable<IProduct[]>;

  public isShow: boolean = true;

  public constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  public search({target}: Event): void {
    this.searchTerm = (target as HTMLInputElement).value;
  }

  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
