import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get("https://fakestoreapi.com/products");
  }

  getAllCart() {
    return this.http.get("https://fakestoreapi.com/carts");
  }

  getUser() {
    return this.http.get("https://fakestoreapi.com/users");
  }

  addProduct(cartData: any) {
    return this.http.post("https://fakestoreapi.com/carts", cartData);
  }

  deleteCart(cartId: number) {
    return this.http.delete(`https://fakestoreapi.com/carts/${cartId}`);
  }

  auth(userData: any) {
    return this.http.post("https://fakestoreapi.com/auth/login", userData);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
   }

  registerUser(userData: any) {
  return this.http.post("https://fakestoreapi.com/users", userData);
  }
}
