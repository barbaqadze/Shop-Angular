import { Component, ChangeDetectorRef } from '@angular/core'; 
import { Api } from '../api';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(
    public api: Api,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.showALL();
  }

  public productList: any[] = [];

  showALL() {
    this.api.getAll().subscribe({
      next: (data: any) => {
        this.productList = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('მონაცემების წამოღების შეცდომა:', err);
      }
    });
  }

  addToCart(productId: number) {
    const orderData = {
      userId: 1,
      date: new Date().toISOString().split('T')[0],
      products: [
        {
          productId: productId,
          quantity: 1
        }
      ]
    };

    this.api.addProduct(orderData).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        alert("პროდუქტი წარმატებით დაემატა კალათაში!");
      },
      error: () => {
        alert("შეცდომა მოხდა დამატებისას");
      }
    });
  }
}
