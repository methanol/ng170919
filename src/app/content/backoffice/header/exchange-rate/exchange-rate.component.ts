import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {

  @Input()
  public rates: { value: number, currency: string } []  = [];


}
