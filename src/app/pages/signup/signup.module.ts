import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupFormModule } from './signup-form/signup-form.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupFormModule],
})
export class SignupModule {}
