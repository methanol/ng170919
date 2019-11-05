import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRatesDirective } from './header/exchange-rate/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ExchangeRateComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    BackofficeComponent
  ],
  imports: [
    BackofficeRoutingModule,
    SharedModule
  ]
})
export class BackofficeModule {
}
