import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it(`should have as title 'Single Page App'`, () => {
    const app = new AppComponent();

    expect(app.title).toEqual('Single Page App');
  });
});
