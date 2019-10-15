import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent  {

  public title: { text: string, subtitle: { text: string } } = {
    text: 'Angular course',
    subtitle: {text: 'Subtitle'}
  };

  public drawer!: MatSidenav;

  public setSideNav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }
}
