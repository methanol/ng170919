import {
  Component, HostListener,
  Input, OnInit,
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { IStore } from '@store/index';
import { LogoutPending } from '@store/actions/auth.actions';
import { Observable } from 'rxjs';
import { trueProductsCount } from '@store/reducers/cart.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title!: string;

  @Input()
  public drawer!: MatSidenav;

  public isOpen: boolean = false;
  public totalCount$!: Observable<number>;

  public rates: { value: number, currency: string }[] = [
    {value: 1, currency: 'USD'},
    {value: 10, currency: 'EUR'},
    {value: 14, currency: 'RUB'},
  ];

  public titleColor: SafeStyle = this._sanitizer.bypassSecurityTrustStyle('color: orange');

  public constructor(
    private readonly _sanitizer: DomSanitizer,
    private readonly store: Store<IStore>
  ) {
  }

  public ngOnInit(): void {
    this.totalCount$ = this.store.select(trueProductsCount);
  }

  @HostListener('window:click', ['$event'])
  public handleClick(e: MouseEvent): void {
    const isInCart: Element | null = (e.target as HTMLElement).closest('.cart');
    if (isInCart) {
      return;
    }
    this.isOpen = false;
  }


  public toggleDrawer(): void {
    this.drawer.toggle();
  }

  public logout(): void {
    this.store.dispatch(new LogoutPending());
  }

}
