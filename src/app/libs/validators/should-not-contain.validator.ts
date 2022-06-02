import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * @description
 * Validator requires that control value does not contain another control value.
 * If control value contains another control value than error `shouldNotContain<anotherControlName>` is set to the controll.
 *
 * @param controlName - name of the control
 * @param anotherControlName - name of the another control
 * @returns validation function
 */
export function shouldNotContain(
  controlName: string,
  anotherControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName);
    const anotherControl = formGroup.get(anotherControlName);

    if (!control || !anotherControl) {
      return null;
    }

    const errorKey = 'shouldNotContain' + anotherControlName;
    const errors = control.errors || {};

    if (
      control.value &&
      anotherControl.value &&
      control.value.includes(anotherControl.value)
    ) {
      errors[errorKey] = true;
      control.setErrors(errors);

      const error: { [key: string]: any } = {};
      error[errorKey] = true;

      return error;
    } else {
      delete errors[errorKey];

      if (Object.keys(errors).length === 0) {
        control.setErrors(null);
      }

      return null;
    }
  };
}
