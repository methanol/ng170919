import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
  }
}
