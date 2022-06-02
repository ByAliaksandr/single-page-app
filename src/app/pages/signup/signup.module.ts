import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupFormModule } from './signup-form/signup-form.module';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, MatCardModule, SignupFormModule],
})
export class SignupModule {}
