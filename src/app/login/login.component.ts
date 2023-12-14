import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ UserService]
})
export class LoginComponent {
  constructor( private router: Router, private userservice : UserService) {}

  username!: string;
  password!: string;
  users!: User[];
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  redirigerVersAccueil() {
    // Utilisez le service Router pour effectuer la redirection
    this.router.navigate(['/accueil']);
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'root') {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/success']);
    }
  }


}

