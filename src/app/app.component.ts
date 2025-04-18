import { Component } from '@angular/core';
import { CheckoutOptions } from 'fedapay-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title !: string; // Define the title property

  checkoutButtonOptions: CheckoutOptions = {
      transaction: {
          amount: 75000,
          description: 'Achat de montre de luxe'
      },
      currency: {
          iso: 'XOF'
      },
      button: {
          class: 'btn btn-outline-primary rounded-1 float-end',
          text: 'Payer 75.000 FCFA'
      },
      onComplete(resp: any) {
          const FedaPay = (window as any) ['FedaPay'];
          if (resp.reason === FedaPay.DIALOG_DISMISSED) {
            window.location.href = "http://localhost:4200";
            alert('Paiement annulé');
          } else {
            alert('Transaction terminée : ' + resp.reason);
            window.location.href = "http://localhost:4200";
  
          }

          console.log(resp.transaction);
      }
  };

  checkoutEmbedOptions: CheckoutOptions = {
      transaction: {
          amount: 100000,
          description: 'Achat de montre de luxe'
      },
      currency: {
          iso: 'XOF'
      }
  };
}
