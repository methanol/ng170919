import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
