import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Validations {
    static isPasswordEquals(senhaControlName: string, confirmarSenhaControlName: string): ValidatorFn {
        return (formGroup: AbstractControl) => {
            const senhaControl = formGroup.get(senhaControlName);
            const confirmarSenhaControl = formGroup.get(confirmarSenhaControlName);


            if(!senhaControl || !confirmarSenhaControl) return null;

            if(confirmarSenhaControl.errors && !confirmarSenhaControl.errors['passwordHaveMatch']) return null;

            if(senhaControl.value !== confirmarSenhaControl.value) {
                confirmarSenhaControl.setErrors({passwordHaveMatch: true});
                return {passwordHaveMatch: true};
            } else {
                confirmarSenhaControl.setErrors(null);
                return null;
            }
        }
    }
}