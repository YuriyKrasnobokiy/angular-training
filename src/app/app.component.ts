import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BigReactiveFormComponent } from './big-reactive-form/big-reactive-form.component';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, NgIf, FormsModule, BigReactiveFormComponent, NameEditorComponent, ProfileEditorComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
