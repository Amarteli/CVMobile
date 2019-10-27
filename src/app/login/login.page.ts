import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';
/* Ari Martelius, 1800582
 Here is checked login info*/
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  registerCredentials = { email: '', password: '' };
  private todo: FormGroup;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  /* Form data is checked here */
  // tslint:disable-next-line:ban-types
  login(email: String, password: String) {
     if (this.form.value.email === 'ari' && this.form.value.password === 'pwd') {

     this.navCtrl.navigateRoot('/tabs');

   }
  }
}
