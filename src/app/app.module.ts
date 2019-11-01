import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomSerializer, IStore, metaReducers, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CheckJWT } from './store/actions/auth.actions';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule.forRoot(), // import
    ModalModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(
      {
        serializer: CustomSerializer
      }
    )
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [Store],
    multi: true
  }], // service registration
  bootstrap: [AppComponent]
})
export class AppModule {
}

function initApp(store: Store<IStore>): () => void {
  return () => {
    store.dispatch(new CheckJWT());
  };
}

// Module, directive, pipe, service
