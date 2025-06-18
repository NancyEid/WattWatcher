import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-buyproduct',
  standalone: true,
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.scss']
})
export class BuyproductComponent {
  quantity1: number = 1;
  product1: Product = { name: 'WattWatcher 1', price: 750 };
  quantity2: number = 1;
  product2: Product = { name: 'WattWatcher 2', price: 999 };
  cartItems: { name: string, quantity: number, price: number }[] = [];

  constructor(private router: Router) {}

  decreaseQuantity1() {
    if (this.quantity1 > 1) this.quantity1--;
    this.updateQuantityDisplay('quantity1', this.quantity1);
  }

  increaseQuantity1() {
    this.quantity1++;
    this.updateQuantityDisplay('quantity1', this.quantity1);
  }

  decreaseQuantity2() {
    if (this.quantity2 > 1) this.quantity2--;
    this.updateQuantityDisplay('quantity2', this.quantity2);
  }

  increaseQuantity2() {
    this.quantity2++;
    this.updateQuantityDisplay('quantity2', this.quantity2);
  }

  addToCart1() {
    this.cartItems.push({ name: this.product1.name, quantity: this.quantity1, price: this.product1.price });
    console.log('Cart Items after addToCart1:', this.cartItems);
    alert(`${this.quantity1} ${this.product1.name}(s) added to cart!`);
  }

  addToCart2() {
    this.cartItems.push({ name: this.product2.name, quantity: this.quantity2, price: this.product2.price });
    console.log('Cart Items after addToCart2:', this.cartItems);
    alert(`${this.quantity2} ${this.product2.name}(s) added to cart!`);
  }

  proceedToCheckout() {
    console.log('Navigating with cartItems:', this.cartItems);
    this.router.navigate(['/checkout'], { state: { cartItems: this.cartItems } });
  }

  updateQuantityDisplay(id: string, value: number) {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) input.value = value.toString();
  }

  onQuantityChange1(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      const value = parseInt(input.value, 10);
      if (!isNaN(value) && value >= 1) {
        this.quantity1 = value;
      } else {
        this.quantity1 = 1;
        input.value = '1';
      }
    }
  }

  onQuantityChange2(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      const value = parseInt(input.value, 10);
      if (!isNaN(value) && value >= 1) {
        this.quantity2 = value;
      } else {
        this.quantity2 = 1;
        input.value = '1';
      }
    }
  }
}
