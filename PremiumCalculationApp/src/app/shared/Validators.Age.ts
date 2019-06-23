import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as moment from 'moment';

export class AgeValidators{
    static ageMustMatch(control:AbstractControl){
        let ageEntered = control.get('age');
        let DOBEntered = control.get('dateOfBirth');

        let ageCalculated = AgeValidators.ageFromDateOfBirth(DOBEntered.value);
    
        if(ageEntered.value !== ageCalculated.toString())
        {
            return {ageMustMatch : true};
        }
        else
        {
            return null;
        }
    }

    static ageFromDateOfBirth(dateOfBirth:any):number{
        return moment().diff(dateOfBirth,'years');
    }
}