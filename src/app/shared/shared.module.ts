import { NgModule } from '@angular/core';
import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule {
}
