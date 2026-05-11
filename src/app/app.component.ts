import { Component, model, signal } from '@angular/core';
import { Task } from './tasks-iterface';
import { FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NameEditorComponent, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks = signal<Task[]>([]);
  taskText = model('');
  chosedTaskId = signal(null)

  addTask() {
    
    this.tasks.update(tasks => {
      const taskId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
      return  [...tasks,
      {
        id: taskId,
        title: this.taskText()
      }]
      
    })
    this.taskText.set('')
  }

  deleteTask(id :number) {
    this.tasks.update(tasks => {
    return tasks.filter(task => task.id !== id)
    })
  }
}
