import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.scss'],
  standalone: true
})
export class PagePrincipaleComponent {
  constructor(private router: Router) {}

  redirigerVersLogin() {
    // Utilisez le service Router pour effectuer la redirection
    this.router.navigate(['/connexion']);
  }
}
