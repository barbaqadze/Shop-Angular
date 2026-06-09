import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  public currentUser: any = null;
  public loading: boolean = true;

  constructor(private api: Api) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const loggedInUsername = localStorage.getItem('username');

    this.api.getUser().subscribe({
      next: (users: any) => {
        this.currentUser = users.find((user: any) => user.username === loggedInUsername);
        this.loading = false;
      },
      error: (err) => {
        console.error('შეცდომა პროფილის ჩატვირთვისას:', err);
        this.loading = false;
      }
    });
  }
}
