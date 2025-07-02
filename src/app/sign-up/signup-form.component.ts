import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  imports: [ FormsModule , ReactiveFormsModule , CommonModule ],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(
      '' , [Validators.required , Validators.minLength(3) , UsernameValidators.cannotContainSpace ],
      [ UsernameValidators.shouldBeUnique ]
    ),
    password: new FormControl(
      '' , Validators.required
    )
  })
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
