import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users = [
    { username: 'john_doe', email: 'john.doe@example.com' },
    { username: 'jane_smith', email: 'jane.smith@example.com' },
    { username: 'alex_jones', email: 'alex.jones@example.com' },
  ];
  addUser(){
    
  }
}
