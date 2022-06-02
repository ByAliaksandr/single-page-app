import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z]).{8,}')],
    ],
  });

  hiddenPassword = true;

  get firstnameControl() {
    return this.signupForm.get('firstname');
  }

  get lastnameControl() {
    return this.signupForm.get('lastname');
  }

  get emailControl() {
    return this.signupForm.get('email');
  }

  get passwordControl() {
    return this.signupForm.get('password');
  }

  constructor(private fb: FormBuilder) {}

  submit(): void {}

  getPasswordErrorMessage(): string {
    if (this.passwordControl?.hasError('required')) {
      return 'Password is required';
    } else if (this.passwordControl?.hasError('pattern')) {
      return 'Password should be a minimum of eight characters and contain lower & uppercase letters';
    }

    return '';
  }
}
