import { FormControl, FormGroup } from '@angular/forms';
import { shouldNotContain } from './should-not-contain.validator';

describe('shouldNotContain', () => {
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

  it('should set an error as control value contains another control value', () => {
    const formGroup = new FormGroup({
      control: new FormControl('AnotherControlValue'),
      anotherControl: new FormControl('AnotherControlValue'),
    });

    shouldNotContain('control', 'anotherControl')(formGroup);

    expect(
      formGroup?.get('control')?.hasError('shouldNotContainanotherControl')
    ).toBeTruthy();
  });

  it('should set an two errors as first control value contains other control values', () => {
    const formGroup = new FormGroup({
      firstcontrol: new FormControl('SecondThird'),
      secondControl: new FormControl('Second'),
      thirdControl: new FormControl('Third'),
    });

    shouldNotContain('firstcontrol', 'secondControl')(formGroup);
    shouldNotContain('firstcontrol', 'thirdControl')(formGroup);

    const errors = formGroup?.get('firstcontrol')?.errors || {};

    expect(Object.keys(errors).length).toEqual(2);
  });

  it('should set one error after setting second control value as first control value contains only third control value', () => {
    const formGroup = new FormGroup({
      firstcontrol: new FormControl('SecondThird'),
      secondControl: new FormControl('Second'),
      thirdControl: new FormControl('Third'),
    });

    shouldNotContain('firstcontrol', 'secondControl')(formGroup);
    shouldNotContain('firstcontrol', 'thirdControl')(formGroup);

    formGroup?.get('secondControl')?.setValue('NewValue');
    shouldNotContain('firstcontrol', 'secondControl')(formGroup);

    const errors = formGroup?.get('firstcontrol')?.errors || {};

    expect(Object.keys(errors).length).toEqual(1);
  });

  it('should set no errors after setting first control value as first control value has an unique value', () => {
    const formGroup = new FormGroup({
      firstcontrol: new FormControl('SecondThird'),
      secondControl: new FormControl('Second'),
      thirdControl: new FormControl('Third'),
    });

    shouldNotContain('confirstcontroltrol', 'secondControl')(formGroup);
    shouldNotContain('firstcontrol', 'thirdControl')(formGroup);

    formGroup?.get('firstcontrol')?.setValue('NewValue');
    shouldNotContain('firstcontrol', 'secondControl')(formGroup);
    shouldNotContain('firstcontrol', 'thirdControl')(formGroup);

    const errors = formGroup?.get('firstcontrol')?.errors || {};

    expect(Object.keys(errors).length).toEqual(0);
  });
});
