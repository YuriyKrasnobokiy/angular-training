import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForbiddenNameDirective } from '../forbidden-name.directive';

@Component({
  selector: 'app-profile-editor',
  imports: [ReactiveFormsModule, ForbiddenNameDirective],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss',
  standalone: true,
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  updateForm() {
    this.profileForm.setValue({
      firstName: 'Bob',
      lastName: 'Dean',
    })
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
    })
  }

  updateFirstName() {
    console.log(this.profileForm.value);
    this.profileForm.patchValue({
      firstName: '',
    })
  }
  updateLastName() {
    console.log(this.profileForm.value);
    this.profileForm.patchValue({
      lastName: '',
    })
  }

}
