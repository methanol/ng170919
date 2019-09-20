import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent  // let/const pipe/directive
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    SharedModule// import
  ],
  exports: [], // export
  providers: [], // service registration
  bootstrap: [AppComponent]
})
export class AppModule { }


// Module, directive, pipe, service
