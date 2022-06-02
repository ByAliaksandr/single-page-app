import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SignupFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule],
  exports: [SignupFormComponent],
})
export class SignupFormModule {}
