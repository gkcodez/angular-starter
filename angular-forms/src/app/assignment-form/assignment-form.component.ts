import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css'],
})
export class AssignmentFormComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames: string[] = ['Test'];
  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required],
        [this.projectNameValidator.bind(this)]
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null),
    });
  }

  // projectNameValidator(control: FormControl): { [key: string]: boolean } {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return { forbidden: true };
  //   }
  //   return null;
  // }

  projectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ forbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
