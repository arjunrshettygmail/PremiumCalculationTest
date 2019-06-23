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
  age:number = 0 ;


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


  ngOnInit() {
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
      this.age = this.service.form.get('age').value

      this.chosenOccupation = this.service.form.get('occupation').value;
      let selectedFactor = this.ratingFactors.find(x=> x.id == this.chosenOccupation);
      this.chosenFactor = selectedFactor.value;

      this.premium = (this.amount*this.chosenFactor*this.age)/(1000*12);

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
