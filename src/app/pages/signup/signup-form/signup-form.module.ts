import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [SignupFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  exports: [SignupFormComponent],
})
export class SignupFormModule {}
