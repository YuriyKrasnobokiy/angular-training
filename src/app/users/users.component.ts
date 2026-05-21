import { Component, computed, inject, model, signal, effect } from '@angular/core';
import { User } from '../services/users/user-contract';
import { UsersService } from '../services/users/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent{
  
  users = signal<User[]>([]);
  userService = inject(UsersService)
  selectedUserId = model()
  filteredUsers = computed(()=> !this.selectedUserId() ? this.users() : this.users().filter((user)=> user.id === Number(this.selectedUserId())))

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      (resp) => this.users.set(resp)
    )
    
  }

  constructor() {
    effect(()=> console.log(Number(this.selectedUserId())))
  }

   
}
