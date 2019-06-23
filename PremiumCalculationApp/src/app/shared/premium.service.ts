import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators,FormGroupDirective, NgForm  } from "@angular/forms";

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
                                } );


  occupationRatings =  [{ id: 'Light Manual', value: 'Cleaner-Light Manual' },
                        { id: 'Professional', value: 'Doctor-Light Manual' },
                        { id: 'White Collar', value: 'Author-White Collar' },
                        { id: 'Heavy Manual', value: 'Farmer-Heavy Manual' },
                        { id: 'Heavy Manual', value: 'Mechanic-Heavy Manual' },
                        { id: 'Light Manual', value: 'Florist-Light Manual' }];



}


