import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { RouterParts } from 'src/app/app-routing-path.enum';

import { SignupService } from '../signup-service/signup.service';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  describe('#unit tests', () => {
    let signupFormComponent: SignupFormComponent;
    let formBuilterMock: jasmine.SpyObj<FormBuilder>;
    let routerMock: jasmine.SpyObj<Router>;
    let signupServiceMock: jasmine.SpyObj<SignupService>;

    beforeEach(() => {
      formBuilterMock = jasmine.createSpyObj('formBuilder', ['group']);
      routerMock = jasmine.createSpyObj('router', ['navigate']);
      signupServiceMock = jasmine.createSpyObj('signupService', ['signup']);

      signupFormComponent = new SignupFormComponent(
        formBuilterMock,
        routerMock,
        signupServiceMock
      );
    });

    describe('submit', () => {
      beforeEach(() => {
        signupFormComponent.signupForm = new FormGroup({
          firstname: new FormControl(''),
          lastname: new FormControl(''),
          email: new FormControl(''),
          password: new FormControl(''),
        });

        signupServiceMock.signup.and.returnValue(of({}));
      });

      it('should signup', () => {
        signupFormComponent.submit();

        expect(signupServiceMock.signup).toHaveBeenCalled();
      });

      it('should navigate to the home page', () => {
        signupFormComponent.submit();

        expect(routerMock.navigate).toHaveBeenCalledWith([RouterParts.Home]);
      });

      it('should not set a submit error', () => {
        signupFormComponent.submit();

        expect(signupFormComponent.submitError).toBeFalsy();
      });

      it('should set a submit error', () => {
        signupServiceMock.signup.and.returnValue(
          throwError(() => {
            new Error('Test Error');
          })
        );

        signupFormComponent.submit();

        expect(signupFormComponent.submitError).toBeTruthy();
      });
    });
  });

  describe('#component tests', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;
    let signupServiceMock: jasmine.SpyObj<SignupService>;

    beforeEach(async () => {
      signupServiceMock = jasmine.createSpyObj('signupService', ['signup']);

      await TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          MatInputModule,
          MatIconModule,
          MatButtonModule,
        ],
        declarations: [SignupFormComponent],
        providers: [{ provide: SignupService, useValue: signupServiceMock }],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(SignupFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should have 4 form inputs', () => {
      const signupForm = fixture.debugElement.query(By.css('.signup-form'));
      const inputs = signupForm.queryAll(
        By.css('mat-form-field.full-width-field')
      );

      expect(inputs.length).toEqual(4);
    });

    it('should show firstname label', () => {
      const signupForm = fixture.debugElement.query(By.css('.signup-form'));
      const firstnameLabel = signupForm.query(
        By.css('[data-test-id="firstname-label"]')
      );

      expect(firstnameLabel.nativeElement.textContent).toContain('First name');
    });
  });
});
