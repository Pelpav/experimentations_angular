import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
  providers: [ UserService]
})
export class SuccessComponent implements OnInit{

  username: string | null = null;
  constructor(private userService: UserService) {}
  ngOnInit() {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    } else {
      console.log("Pas connecté");
      this.username = "Utilisateur inconnu";
    }
  }
}
