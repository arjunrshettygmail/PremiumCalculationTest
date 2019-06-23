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

  occupationRatings = [
    { id: 'Light Manual', value: 'Cleaner-Light Manual' },
    { id: 'Professional', value: 'Doctor-Light Manual' },
    { id: 'White Collar', value: 'Author-White Collar' },
    { id: 'Heavy Manual', value: 'Farmer-Heavy Manual' },
    { id: 'Heavy Manual', value: 'Mechanic-Heavy Manual' },
    { id: 'Light Manual', value: 'Florist-Light Manual' }];

    ratingFactors = [
      { id: 'Professional', value: 1.0 },
      { id: 'White Collar', value: 1.25 },
      { id: 'Light Manual', value: 1.5 },
      { id: 'Heavy Manual', value: 1.75 }];

      calculateMonthlyPremium(amount:number,factor:number,age:number):number
      {
        return (amount*factor*age)/(1000*12);
      }

 
}




class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && control.touched  ;
  }
}
