import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { User } from './user/user';
import { Login } from './login/login';
import { Register } from './register/register';
import { NotFound } from './not-found/not-found';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "cart", component: Cart, canActivate: [authGuard] },
  { path: "user", component: User, canActivate: [authGuard] },
  { path: "**", component: NotFound },
];
