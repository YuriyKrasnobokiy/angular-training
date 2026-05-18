import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
  <div>
    <p>{{ messageFromChildren() }}</p>
    <app-child [message]='messageFromPerent()' (messageFromChild)='recieveData($event)'/>
  <div>`,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  messageFromPerent = signal<string>('Повідомлення від батька')
  messageFromChildren = signal<string>('')

  recieveData(data: string) {
    this.messageFromChildren.set(data)
  }
}
