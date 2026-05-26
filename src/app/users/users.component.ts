import { Component, computed, inject, model, signal, effect } from '@angular/core';
import { User } from '../services/users/user-contract';
import { UsersService } from '../services/users/users.service';
import { FormsModule } from '@angular/forms';
import { filter, map, of, Subject, switchMap, tap } from 'rxjs';
import { PostsComponent } from '../posts/posts.component';
import { PersonNameTransformPipe } from '../pipes/person-name-transform.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, PostsComponent, PersonNameTransformPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent{
  
  users = signal<User[]>([]);
  userService = inject(UsersService)
  selectedUserId = model<string>('')
  fetchedUser = signal<User | null>(null);
  filteredUsers = computed<User[]>(()=> {
    const fetchedUser = this.fetchedUser();

    if (!this.selectedUserId()) return this.users();

    return fetchedUser ? [fetchedUser] : []
  });
  selectedUserId$ = new Subject<string>();

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      (resp) => this.users.set(resp)
    )

    this.selectedUserId$.pipe(map(id => Number(id)),
      tap(id=> console.log(id)),
      switchMap((id)=> !id ? of(null) :
        this.userService.getUserById(id)),
      tap((user)=>console.log(user))
      ).subscribe(resp => this.fetchedUser.set(resp))
  }

  onSelect() {
    return this.selectedUserId$.next(this.selectedUserId() as string)
  }
}
