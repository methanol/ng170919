import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule.forRoot(), // import
    ModalModule,
    AppRoutingModule
  ],
  providers: [], // service registration
  // entryComponents: [CardConfirmModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// Module, directive, pipe, service
