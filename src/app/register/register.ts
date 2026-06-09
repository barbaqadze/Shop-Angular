import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.html',
})
export class Register {
  constructor(private api: Api, private router: Router) {}

  onRegister(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const newUser = {
      email: (target.elements.namedItem('email') as HTMLInputElement).value,
      username: (target.elements.namedItem('username') as HTMLInputElement).value,
      password: (target.elements.namedItem('password') as HTMLInputElement).value,
      name: {
        firstname: (target.elements.namedItem('firstname') as HTMLInputElement).value,
        lastname: (target.elements.namedItem('lastname') as HTMLInputElement).value
      },
      phone: '123-456-789'
    };

    this.api.registerUser(newUser).subscribe({
      next: (res: any) => {
        console.log('Registered User ID:', res);
        alert('რეგისტრაცია წარმატებით დასრულდა! ახლა გაიარეთ ავტორიზაცია.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('რეგისტრაციისას დაფიქსირდა შეცდომა!');
        console.error(err);
      }
    });
  }
}
