import { Component, inject, signal } from '@angular/core';
import { User } from '../services/users/user-contract';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent{
  users = signal<User[]>([]);
  userService = inject(UsersService)

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      (resp) => this.users.set(resp)
    )
  }
}
