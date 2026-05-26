import { Component, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<div (click)='sendMessage()'>{{ message() }}</div>`,
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  message = input.required<string>();
  messageFromChild = output<string>();
  text: string = ('Трололо qjgnf')

  sendMessage() {
    this.messageFromChild.emit('Повідомлення від дитини')
  }
}
