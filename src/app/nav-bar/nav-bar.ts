import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  constructor(public api: Api, private router: Router) {}

  onLogout() {
    this.api.logout();
    this.router.navigate(['/login']);
  }
}
