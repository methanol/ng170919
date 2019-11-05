import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  public commonValidators: ValidatorFn[] = [
    Validators.required, Validators.minLength(6)
  ];

  public constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [...this.commonValidators]],
      emails: this.fb.array([['', [...this.commonValidators]]]),
      male: [true],
      password: this.fb.group({
          pass: ['', [...this.commonValidators]],
          cpass: ['', [...this.commonValidators]],
        },
        {
          validators: [this.validatorsService.equalValidator]
        }
      )
    });
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control('', [...this.commonValidators]));
  }

  public signup(userForSignUp: any): void {
    console.log(userForSignUp);
  }

}
