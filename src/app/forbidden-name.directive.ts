import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameDirective,
    multi: true
  }],
  standalone: true,
})
export class ForbiddenNameDirective implements Validator {

  @Input() appForbiddenName = '';

  validate(
    control: AbstractControl
  ): ValidationErrors | null {
    const forbidden = control.value?.toLowerCase() === this.appForbiddenName.toLowerCase()
  
  return forbidden ? {forbiddenName: {value: control.value}}
  : null};


  constructor() { }
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);

      return forbidden ? {forbiddenName: {value: control.value}}: null;
    };
  }
}