import { FormControl, ValidationErrors } from "@angular/forms";

export class FurniterShopValidators {

    static hasOnlyWhiteSpace(control: FormControl): ValidationErrors | null{
        //Check if field has only white space.
        return (control.value != null && control.value.trim().length === 0) ? {'hasOnlyWhiteSpace': true} : null;
    }
}
