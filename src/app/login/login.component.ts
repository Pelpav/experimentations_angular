import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  username!: string;
  password!: string;

  redirigerVersAccueil() {
    // Utilisez le service Router pour effectuer la redirection
    this.router.navigate(['/accueil']);
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'root') {
      this.router.navigate(['/success']);
    } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }

}
