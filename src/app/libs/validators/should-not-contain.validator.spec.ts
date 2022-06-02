import { FormControl, FormGroup } from '@angular/forms';
import { shouldNotContain } from './should-not-contain.validator';

fdescribe('shouldNotContain', () => {
  it('should not set an error', () => {
    const formGroup = new FormGroup({
      control: new FormControl('ControlValue'),
      anotherControl: new FormControl('AnotherControlValue'),
    });

    shouldNotContain('control', 'anotherControl')(formGroup);

    expect(
      formGroup?.get('control')?.hasError('shouldNotContainAnotherControlValue')
    ).toBeFalsy();
  });
});
