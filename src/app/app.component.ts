import { Component, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { IProduct, products$ } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title: { text: string, subtitle: { text: string } } = {
    text: 'Angular course',
    subtitle: {text: 'Subtitle'}
  };

  public products$: Observable<IProduct[]> = products$;

  public isShow: boolean = true;

  public drawer: MatSidenav;

  public setSideNav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }
}
