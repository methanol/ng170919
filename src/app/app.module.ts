import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRatesDirective } from './header/exchange-rate/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { ProductsService } from './products.service';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ExampleService } from './example.service';
import { ModalModule } from './modal/modal.module';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRateComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    CardConfirmModalComponent  // let/const pipe/directive
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule, // import
    ModalModule,
  ],
  exports: [], // export
  providers: [
    ProductsService,
    ExampleService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ], // service registration
  entryComponents: [CardConfirmModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// Module, directive, pipe, service
