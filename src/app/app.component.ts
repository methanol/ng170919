import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', '\\']
})
export class AppComponent {
  public title: { text: string, subtitle: { text: string } } = {
    text: 'Angular course',
    subtitle: {text: 'Subtitle'}
  };


  public onClickTest(el: HTMLImageElement): void {
    console.log(el);
  }
}
