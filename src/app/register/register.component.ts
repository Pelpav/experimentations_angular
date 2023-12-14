import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = '';
  password = '';

  onSubmit() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: { username: string, password: string }) => user.username === this.username);

    if (userExists) {
      console.log('Ce nom d\'utilisateur est déjà pris');
    } else {
      users.push({ username: this.username, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Inscription réussie');
    }
  }
}
