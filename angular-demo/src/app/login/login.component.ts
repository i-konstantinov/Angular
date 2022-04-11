import { Component } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  canSubmit: boolean = false;
  initialEmail: string = 'test@mail.com';
  
  checkFields(email: NgControl, pass: NgControl) {
    if (email.valid && pass.valid) {
      this.canSubmit = true;
    } else {
      this.canSubmit = false;
    }
  }
  
  loginHandler(form: NgForm): void {

  }
}
