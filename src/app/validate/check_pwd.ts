import { FormControl } from '@angular/forms';
export class PasswordValidator {
  static validPassword(fc: FormControl) {
    if (fc.value.toLowerCase() === 'pwd' ) {
      return ({validPassword: true});
    } else {
      return (null);
    }
  }
}
