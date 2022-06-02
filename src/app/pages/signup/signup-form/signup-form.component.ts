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
  });

  get firstnameControl() {
    return this.signupForm.get('firstname');
  }

  get lastnameControl() {
    return this.signupForm.get('lastname');
  }

  get emailControl() {
    return this.signupForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  submit(): void {}
}
