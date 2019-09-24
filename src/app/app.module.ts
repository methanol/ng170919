import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent  // let/const pipe/directive
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule// import
  ],
  exports: [], // export
  providers: [], // service registration
  bootstrap: [AppComponent]
})
export class AppModule { }


// Module, directive, pipe, service
