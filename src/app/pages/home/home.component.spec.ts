import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  describe('#component tests', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [MatCardModule],
        declarations: [HomeComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display home title', () => {
      const title = fixture.debugElement.query(
        By.css('[data-test-id="title"]')
      );

      expect(title.nativeElement.textContent).toContain('Home');
    });

    it('should display home content', () => {
      const content = fixture.debugElement.query(
        By.css('[data-test-id="content"]')
      );

      expect(content.nativeElement.textContent).toContain(
        'Welcome to home page'
      );
    });
  });
});
