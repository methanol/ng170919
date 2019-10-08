import { Observable } from 'rxjs';
import { IProduct } from './mock';
import { HttpClient } from '@angular/common/http';


export class ProductsService {
  public constructor(
    private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}
