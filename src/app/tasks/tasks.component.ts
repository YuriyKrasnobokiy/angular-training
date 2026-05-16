import { Component, computed, model, NgModule, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  text: string
  id: number
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  taskText = model('');
  searchQuery = model('');
  tasks = signal<Task[]>([]);
  filteredTasks = computed(() => {
    return this.tasks().filter(t=>t.text.toLowerCase().includes(this.searchQuery().toLowerCase().trim()))
  })

  addTask() {
    if (!this.taskText()) return;

    this.tasks.update((tasks) => 
      [...tasks, {
        text: this.taskText(),
        id: !tasks.length ? 0 : tasks[tasks.length - 1].id + 1
      }]
    )
    this.taskText.set('')
  }

  deleteTask(id: number) {
    this.tasks.set(this.tasks().filter(t => t.id !== id))
  }
}
