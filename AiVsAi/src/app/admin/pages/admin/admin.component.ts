import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  users = [
    { username: 'john_doe', email: 'john.doe@example.com' },
    { username: 'jane_smith', email: 'jane.smith@example.com' },
    { username: 'alex_jones', email: 'alex.jones@example.com' },
  ];
  addUser(){

  }
}
