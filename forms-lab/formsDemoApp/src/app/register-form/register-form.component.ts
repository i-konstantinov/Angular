import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  matchingPasswords: boolean = true;
  matchPasswords(regForm: NgForm): void {
    if (regForm.form.value.password !== regForm.form.value['re-password']) {
      
      this.matchingPasswords = false;
    }
  }
}
