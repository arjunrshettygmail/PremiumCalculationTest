import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as moment from 'moment';

export class AgeValidators{
    static ageMustMatch(control:AbstractControl){
        let ageEntered = control.get('age');
        let DOBEntered = control.get('dateOfBirth');

        let ageCalculated = AgeValidators.ageFromDateOfBirth(DOBEntered.value);
        //console.log('ageEntered')
        //console.log(ageEntered)
        //console.log('DOBEntered')
        //console.log(DOBEntered)
        //console.log('ageCalculated')
        //console.log(ageCalculated)

        if(ageEntered.value !== ageCalculated.toString())
        {
            //console.log('ageMustMatch : true')
            return {ageMustMatch : true};
        }
        else
        {
            //console.log('ageMustMatch : null')
            return null;
        }
    }

    static ageFromDateOfBirth(dateOfBirth:any):number{
        return moment().diff(dateOfBirth,'years');
    }
}