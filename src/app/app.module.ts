import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FedaPayCheckoutModule } from 'fedapay-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FedaPayCheckoutModule.forRoot({
      public_key: 'pk_sandbox_XXXXXXXXXXX', // Remplacer par votre clé publique
      app_id: 'ionic.app'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
