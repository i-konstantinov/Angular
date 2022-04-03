import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UsernameValidatorDirective, multi: true }]
})
export class UsernameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {

      if (control.value.trim().split(' ').length != 2) {
        return { 'msg': 'The full name input field must contain two names, separated by a single space' };
      }
  
      let [first, second]: string[] = control.value.trim().split(' ');
  
      if (first[0] != first[0].toUpperCase() || second[0] != second[0].toUpperCase()) {
        return {
          'msg': 'Both names should start with a capital letter'
        }
      }
      
      if (hasNumbers(first) || hasNumbers(second)) {
        return { 'msg' : 'The full name input field must contain only letters'}
      }
    }
    return null;
  }
}


function hasNumbers(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}
