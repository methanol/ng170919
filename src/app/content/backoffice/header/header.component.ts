import {
  Component,
  Input,
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public title!: string;

  @Input()
  public drawer!: MatSidenav;

  public rates: { value: number, currency: string }[] = [
    {value: 1, currency: 'USD'},
    {value: 10, currency: 'EUR'},
    {value: 14, currency: 'RUB'},
  ];

  public titleColor: SafeStyle = this._sanitizer.bypassSecurityTrustStyle('color: orange');

  public constructor(
    private readonly _sanitizer: DomSanitizer
  ) {
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
  }

}
