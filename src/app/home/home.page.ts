import { Component } from '@angular/core';
import { UsernameValidator } from '../validate/check_id';
import { PasswordValidator } from '../validate/check_pwd';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
/* Ari Martelius, 1800582 */
@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public password = '';
  public userid = '';
  public loginForm: any;
  private todo: FormGroup;

  [x: string]: any;
  validationMessages = {
    userid: [
        { type: 'required', message: 'Username is required.' },
        { type: 'minlength', message: 'Username must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
      ],
      passwrd: [
        { type: 'required', message: 'Name is required.' }
      ],
    };


    constructor() { }

  public home( formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userid : [null,  UsernameValidator.validUsername, Validators.required],
      password: [null, PasswordValidator.validPassword, Validators.required]
    });

    window.location.href = 'about.html';
      }
  }

