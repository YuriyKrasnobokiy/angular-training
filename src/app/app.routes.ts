import { Route} from '@angular/router';
import { BigReactiveFormComponent } from './big-reactive-form/big-reactive-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'reactive', component: BigReactiveFormComponent},
  {path: 'tasks', component: TasksComponent},
  {path: '**', redirectTo: ''}

];
