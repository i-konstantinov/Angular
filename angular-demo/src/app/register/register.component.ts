import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsComparer } from './sameValueValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  formErrors = {
    passwordsNotMatching: false
  };

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)] ],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rePassword: ['', [Validators.required, passwordsComparer(() => this.form?.get('password')!)]]
    });
  }
}


