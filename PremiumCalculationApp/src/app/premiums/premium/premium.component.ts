import { Component, OnInit } from '@angular/core';

import { PremiumService } from '../../shared/premium.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  constructor(private service: PremiumService) { 
  }

  premium:number = -1 ;
  chosenFactor:number = 0 ;
  chosenOccupation:string = '' ;
  amount:number = 0 ;
  ageSelected:number = 0 ;
  occupationRatings;
  ratingFactors;

  get fullName() { return this.service.form.get('fullName'); }
  get age() { return this.service.form.get('age'); }
  get dateOfBirth() { return this.service.form.get('dateOfBirth'); }
  get deathSumInsured() { return this.service.form.get('deathSumInsured'); }
  get occupation() { return this.service.form.get('occupation'); }

  ngOnInit() {

    this.occupationRatings = this.service.occupationRatings;
    this.ratingFactors = this.service.ratingFactors;
  }

  onClear() {
    console.log('on clear was calld');
    console.log(this.service.form.value);
    
  }

  selectionChanged(){
    console.log('on change was called');
    if(this.service.form.get('occupation').value == "-1")
    {
      this.service.form.controls['occupation'].setErrors({'notSelected': true});
    }
    else
    {
      console.log('inside else');
      
      this.service.form.get('deathSumInsured');
      this.amount = this.service.form.get('deathSumInsured').value
      this.ageSelected = this.service.form.get('age').value

      this.chosenOccupation = this.service.form.get('occupation').value;
      let selectedFactor = this.ratingFactors.find(x=> x.id == this.chosenOccupation);
      this.chosenFactor = selectedFactor.value;

      this.premium = this.service.calculateMonthlyPremium(this.amount,this.chosenFactor,this.ageSelected);

    }

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
