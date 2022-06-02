import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterParts } from 'src/app/app-routing-path.enum';
import { shouldNotContain } from 'src/app/libs/validators/should-not-contain.validator';
import { SingupRequest } from '../signup-service/signup-request.interface';
import { SignupService } from '../signup-service/signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnDestroy {
  signupForm = this.fb.group(
    {
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[A-Z])(?=.*[a-z]).{8,}'),
        ],
      ],
    },
    {
      validators: [
        shouldNotContain('password', 'firstname'),
        shouldNotContain('password', 'lastname'),
      ],
    }
  );

  hiddenPassword = true;
  submitError = false;

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

  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupService: SignupService
  ) {}

  submit(): void {
    this.submitError = false;

    if (this.signupForm.valid) {
      this.signupService
        .signup(this.getSignupData())
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: () => {
            this.resetForm();
            this.router.navigate([RouterParts.Home]);
          },
          error: () => {
            this.submitError = true;
          },
        });
    }
  }

  getPasswordErrorMessage(): string {
    if (this.passwordControl?.hasError('required')) {
      return 'Password is required';
    } else if (this.passwordControl?.hasError('pattern')) {
      return 'Password should be a minimum of eight characters and contain lower & uppercase letters';
    } else if (this.passwordControl?.hasError('shouldNotContainfirstname')) {
      return 'Password should not contain first name';
    } else if (this.passwordControl?.hasError('shouldNotContainlastname')) {
      return 'Password should not contain last name';
    }
    return '';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getSignupData(): SingupRequest {
    return {
      firstName: this.firstnameControl?.value,
      lastName: this.lastnameControl?.value,
      email: this.emailControl?.value,
      password: this.passwordControl?.value,
    };
  }

  private resetForm(): void {
    this.signupForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });
  }
}
