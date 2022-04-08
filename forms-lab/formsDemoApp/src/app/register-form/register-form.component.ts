import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModelGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  matchingPasswords: boolean = true;
  
  regForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new  FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    're-password': new FormControl('', Validators.required)
  });
  matchPasswords(): void {
    this.matchingPasswords = this.regForm.get('password')?.value === this.regForm.get('re-password')?.value;
  }
  onSubmit() {
    console.log(this.regForm);
  }
}
