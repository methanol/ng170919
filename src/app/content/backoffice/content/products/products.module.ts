import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolveService } from './one-product/product-resolve.service';

@NgModule({
  declarations: [
    CardConfirmModalComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
  ],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [
    ProductResolveService
  ]
})
export class ProductsModule {
}
