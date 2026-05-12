import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-big-reactive-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './big-reactive-form.component.html',
  styleUrl: './big-reactive-form.component.scss',
  standalone: true
})
export class BigReactiveFormComponent {
  ageValidator(control: AbstractControl): ValidationErrors | null{
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : {ageInvalid: 'Age mus be between 18 and 120'}
  }

  formValues = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  });

  invalidDefaultMessage: string = 'This field is invalid';

  onFormSubmit() {
    console.log(this.formValues.value);
    console.log(this.formValues.valid);
    console.log(this.formValues.controls);

    this.formValues.reset()
  }

  get name() {
    return this.formValues.get('name')
  }
  get email() {
    return this.formValues.get('email')
  }
  get age() {
    return this.formValues.get('age')
  }
  get password() {
    return this.formValues.get('password')
  }
  get consent() {
    return this.formValues.get('consent')
  }
}
