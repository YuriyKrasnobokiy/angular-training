import { Route} from '@angular/router';
import { BigReactiveFormComponent } from './big-reactive-form/big-reactive-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { UsersComponent } from './users/users.component';

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'reactive', component: BigReactiveFormComponent},
  {path: 'users', component: UsersComponent},
  {path: 'tasks', canActivate: [authGuard], component: TasksComponent},
  {path: '**', redirectTo: ''}

];
