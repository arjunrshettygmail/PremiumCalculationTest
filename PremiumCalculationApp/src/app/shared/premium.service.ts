import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators,FormGroupDirective, NgForm  } from "@angular/forms";
import { AgeValidators} from './Validators.Age';
import { ErrorStateMatcher} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  constructor() { }

  form: FormGroup = new FormGroup({
    
    fullName: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    age: new FormControl(0, [Validators.required,Validators.min(1),Validators.max(150)]),
    deathSumInsured: new FormControl(0, [Validators.required,Validators.min(1),Validators.max(10000000)]),
    occupation: new FormControl(0,Validators.required),
    dateOfBirth: new FormControl('',Validators.required),
    
  }, {validators: AgeValidators.ageMustMatch} );

  errorMatcher = new CrossFieldErrorMatcher();

 
}

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && control.touched  ;
  }
}
