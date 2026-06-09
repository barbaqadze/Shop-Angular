import { Component } from '@angular/core';
import { Api } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
})
export class Login {
  constructor(private api: Api, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const loginData = {
      username: (target.elements.namedItem('username') as HTMLInputElement).value,
      password: (target.elements.namedItem('password') as HTMLInputElement).value
    };

    this.api.auth(loginData).subscribe({
      next: (res: any) => {
        // აქ ვინახავთ ტოკენსაც და იუზერნეიმსაც ბრაუზერში
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', loginData.username);

        alert('ავტორიზაცია წარმატებულია!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('არასწორი იუზერნეიმი ან პაროლი!');
        console.error(err);
        target.reset();
      }
    });
  }
}
