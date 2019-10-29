import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { LoginPending } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //
  // @ViewChild('c', {static: false})
  // public userNameControl!: FormControl;

  public constructor(
    private store: Store<IStore>
  ) {
  }


  public login(userForLogin: { username: string, password: string }): void {
    this.store.dispatch(new LoginPending(userForLogin));
  }
}
