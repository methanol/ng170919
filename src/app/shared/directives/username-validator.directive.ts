import { Directive, forwardRef, Provider } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const validatorProvider: Provider = {
  provide: NG_VALIDATORS,
  useClass: forwardRef(() => UsernameValidatorDirective),
  multi: true
};

@Directive({
  selector: '[appUsernameValidator]',
  providers: [validatorProvider]
})
export class UsernameValidatorDirective implements Validator {

  public validate({value}: FormControl): ValidationErrors | null {
    const isValid: boolean = /^[a-zA-Z]*$/.test(value);
    return isValid
      ? null
      : {
        onlyLetters: 'Username should contains only letters'
      };
  }

}
