import { Component, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange, MatSidenav } from '@angular/material';
import { IProduct } from './mock';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title: { text: string, subtitle: { text: string } } = {
    text: 'Angular course',
    subtitle: {text: 'Subtitle'}
  };

  public searchTerm: string = '';
  public onlyFavorites: boolean = false;

  public products$!: Observable<IProduct[]>;

  public isShow: boolean = true;

  public drawer!: MatSidenav;

  public constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  public setSideNav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

  public search({target}: Event): void {
    this.searchTerm = (target as HTMLInputElement).value;
  }

  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}
