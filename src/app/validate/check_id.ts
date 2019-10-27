import { FormControl } from '@angular/forms';
export class UsernameValidator {
  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === 'ari' ) {
      return ({validUsername: true});
    } else {
      return (null);
    }
  }
}
