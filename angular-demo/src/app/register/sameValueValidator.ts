import { AbstractControl, ValidationErrors } from "@angular/forms";
import { startWith, Subscription, switchMap } from "rxjs";

export function passwordsComparer(getTargetControl: () => AbstractControl): ValidationErrors | null {
  let subscription: Subscription | null;
  return function (control: AbstractControl) {
      if (subscription) { subscription.unsubscribe(); }
      let target = getTargetControl();
      if (!target) { return null; }

      subscription = control.statusChanges.pipe(
          startWith(null),
          switchMap(() => target.valueChanges)
      ).subscribe({
          next: () => { control.updateValueAndValidity(); },
          complete: () => { subscription = null; }
      });

      return target?.value === control?.value ? null : { noMatch: true }
  }
}