import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  @ViewChild('userForm') userForm: NgForm;
  answer: string = '';
  genders: string[] = ['Male', 'Female'];
  suggestedUserName = 'superuser';

  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };
  submitted: boolean = false;

  suggestUserName() {
    // this.suggestedUserName = 'superUser';

    // this.userForm.setValue({
    //   userData: {
    //     username: this.suggestedUserName,
    //     email: 'test@test.com',
    //   },
    //   questions: 'pet name',
    //   answer: 'Dreamy',
    //   gender: 'Male',
    // });
    this.userForm.form.patchValue({
      userData: {
        username: this.suggestedUserName,
      },
    });
  }

  // onSubmit(formData: NgForm){
  //   console.log(formData);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.secret = this.userForm.value.answer;
    this.user.gender = this.userForm.value.gender;
    this.userForm.reset({
      userData: {
        username: 'default',
        email: 'user@user.com',
      },
      secret: 'first pet',
      answer: 'Tommy',
      gender: 'Male',
    });
  }
}
