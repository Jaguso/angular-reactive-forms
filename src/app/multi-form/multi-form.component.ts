import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}