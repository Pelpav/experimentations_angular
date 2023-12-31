import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PagePrincipaleComponent, LoginComponent, FormsModule, SuccessComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title="Projets";
}
