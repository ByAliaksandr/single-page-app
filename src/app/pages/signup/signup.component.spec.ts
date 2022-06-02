import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  describe('#component tests', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [MatCardModule],
        declarations: [SignupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display signup title', () => {
      const title = fixture.debugElement.query(
        By.css('[data-test-id="title"]')
      );

      expect(title.nativeElement.textContent).toContain('Sign Up');
    });

    it('should display signup content', () => {
      const content = fixture.debugElement.query(
        By.css('[data-test-id="content"]')
      );

      const appSignupForm = content.query(By.css('app-signup-form'));

      expect(appSignupForm).toBeDefined();
    });
  });
});
