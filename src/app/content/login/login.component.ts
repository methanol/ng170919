import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //
  // @ViewChild('c', {static: false})
  // public userNameControl!: FormControl;

  public login(userForLogin: { username: string, password: string }): void {
    console.log(userForLogin);
  }
}
