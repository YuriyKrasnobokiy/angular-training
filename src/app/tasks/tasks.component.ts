import { CommonModule } from '@angular/common';
import { Component, computed, model, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';
import { AsyncSubject, BehaviorSubject, delay, filter, forkJoin, map, Observable, of, ReplaySubject, Subject, Subscriber, tap } from 'rxjs';

interface Task {
  text: string
  id: number
}

// const temperatureObservable = new Observable(subscriber => {
//     subscriber.next(20);

//     setTimeout(()=> subscriber.next(21), 1000);
//     setTimeout(()=> subscriber.next(22), 2000);
//   })

//   temperatureObservable.subscribe(temp => {
//     console.log(`Температура в кімнаті ${temp} градусів`);
//   });

//   const chatSubject = new Subject();

//   chatSubject.subscribe({
//     next: (message) => console.log(`Користувач 1 отримав ${message}`)
//   })
//   chatSubject.subscribe({
//     next: (message) => console.log(`Користувач 2 отримав ${message}`)
//   })

  
//   chatSubject.next('Привіт! Як справи?')
//   chatSubject.next('Привіт! Все ок. А у тебе?')

// const subject = new BehaviorSubject('початкове значення');

// subject.subscribe({ next: (value) =>
//   console.log(`Перший користвуча отримав значення: `, value)
// })

// subject.next('Нове значення')

// subject.subscribe({next: (value) => console.log(`Користувач 2 отримав значення: `, value)
// })

// const subject = new ReplaySubject(2);

// subject.next('First value')
// subject.next('Second value')
// subject.next('Third value')

// subject.subscribe({
//   next: (value) => console.log(`Користувач 1 отримав значення: `, value)
// })

// const subject = new AsyncSubject()

// subject.next('First')
// subject.next('Second')
// subject.next('Third')

// subject.complete()

// subject.subscribe({
//   next: (value) => console.log(`Користувач отримав занчення: `, value)
// })


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule, ProfileEditorComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

  
export class TasksComponent implements OnInit {
  taskText = model('');
  searchQuery = model('');
  tasks = signal<Task[]>([]);
  filteredTasks = computed(() => {
    return this.tasks().filter(t=>t.text.toLowerCase().includes(this.searchQuery().toLowerCase().trim()))
  })  

  behavierSubject = new BehaviorSubject<number>(0);

  observable1 = of('Запит 1').pipe(delay(1000))
  observable2 = of('Запит 2').pipe(delay(1000))
  observable3 = of('Запит 3').pipe(delay(1000))

  combined = forkJoin([this.observable1, this.observable2, this.observable3])

  ngOnInit(): void {
    this.behavierSubject.pipe(tap(value => console.log('Значення перед обробкою: ', value)), 
    filter(value => value > 0), map(value => value * 10))
    .subscribe({
      next: value => console.log('Оброблене значення: ', value),
      complete: () => console.log('Завершено')
    })

    this.behavierSubject.next(1)
    this.behavierSubject.next(10)
    this.behavierSubject.next(-1)
    this.behavierSubject.next(0)
    this.behavierSubject.next(3)

    this.behavierSubject.complete()
    // this.combined.subscribe({
    //   next: ([response1, respobse2, response3]) => {
    //     console.log('Результат форкджойна: ', response1, respobse2, response3);
    //   },
    //   complete: () => console.log('Всі запити завершено!')
    // });
  };

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
