import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ UserService]
})
export class LoginComponent {
  constructor( private router: Router, private userservice : UserService) {}

  isAuthenticated: boolean = true;
  username!: string;
  password!: string;
  users!: User[];
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  redirigerVersAccueil() {
    // Utilisez le service Router pour effectuer la redirection
    this.router.navigate(['/accueil']);
  }

  onSubmit() {
    const user = this.users.find(user => user.username === this.username && user.password === this.password);
    if (user) {
      if (user.role === 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/success']);
      }
    } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect');
      this.isAuthenticated = false;
    }
  }
}

