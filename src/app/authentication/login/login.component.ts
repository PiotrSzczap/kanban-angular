// noinspection ES6UnusedImports

import {Component} from '@angular/core';
import {Login} from "../model/login.model";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model = new Login("", "");

  onSubmit() {

  }
}
