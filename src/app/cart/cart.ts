import { Component, ChangeDetectorRef } from '@angular/core';
import { Api } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  public cartList: any[] = [];

  constructor(
    public api: Api,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.showAllCart();
  }

  showAllCart() {
    this.api.getAllCart().subscribe({
      next: (data: any) => {
        this.cartList = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('კალათის წამოღების შეცდომა:', err);
      }
    });
  }

  removeCart(cartId: number) {
    this.api.deleteCart(cartId).subscribe({
      next: (response: any) => {
        console.log('წაშლილი კალათის პასუხი:', response);

        // ვფილტრავთ მასივს, რომ წაშლილი იტემი ეგრევე გაქრეს
        this.cartList = this.cartList.filter(cart => cart.id !== cartId);

        this.cdr.detectChanges();
        alert(`კალათა #${cartId} წარმატებით წაიშალა!`);
      },
      error: () => {
        alert("შეცდომა მოხდა კალათის წაშლისას.");
      }
    });
  }
}
