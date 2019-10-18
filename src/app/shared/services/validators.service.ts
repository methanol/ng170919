import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable()
export class ValidatorsService {

  public equalValidator({value}: FormGroup): ValidationErrors | null {
    const [pass, cpass] = Object.values(value);
    return pass !== cpass
      ? {
        notEqual: 'Passwords not equal'
      }
      : null;
  }
}
