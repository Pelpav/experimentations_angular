import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: PagePrincipaleComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'success', component: SuccessComponent},
  { path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
