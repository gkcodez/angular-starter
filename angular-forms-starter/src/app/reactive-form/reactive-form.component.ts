import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  genders: string[] = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Krishna', 'Admin'];
  forbiddenEmails = ['test@test.com'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenUserNamesValidator.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmailsValidator]
        ),
      }),
      gender: new FormControl('Female'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenUserNamesValidator(control: FormControl): {
    [key: string]: boolean;
  } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { forbidden: true };
    }
    return null;
  }

  forbiddenEmailsValidator(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ forbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
