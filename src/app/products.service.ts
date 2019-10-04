import { Observable } from 'rxjs';
import { IProduct } from './mock';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';

export class ProductsService {
  public constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}
