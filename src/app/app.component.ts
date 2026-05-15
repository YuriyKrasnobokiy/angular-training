import { Component, computed, model, signal } from '@angular/core';
import { Task } from './tasks-iterface';
import { FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BigReactiveFormComponent } from './big-reactive-form/big-reactive-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, FormsModule, BigReactiveFormComponent, NameEditorComponent, ProfileEditorComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks = signal<Task[]>([]);
  taskText = model('');
  searchQuery = model('');
  chosedTaskId = signal(null)
  filteredTasks = computed(()=> {
    const query = this.searchQuery().toLowerCase();

      if (!query) return this.tasks();

      return this.tasks().filter(t => t.title.toLowerCase().includes(query))
    }
  )

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
