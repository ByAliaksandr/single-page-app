import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  // describe('#unit tests', () => {});

  describe('#component tests', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          ReactiveFormsModule,
          MatInputModule,
          MatIconModule,
          MatButtonModule,
        ],
        declarations: [SignupFormComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(SignupFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
