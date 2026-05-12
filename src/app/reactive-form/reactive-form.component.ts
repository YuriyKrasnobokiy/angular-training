import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.validator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  formValues = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit() {
    console.log(this.formValues.value);

    this.formValues.reset()
  }
}
