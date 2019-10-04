import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,
  OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

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
    console.log('constructor', this.title);
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
  }


  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }


  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {

    console.log('ngAfterViewChecked');
  }


  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }


}
