import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements AfterViewInit {
  cartItems: { name: string, quantity: number, price: number }[] = [];
  totalAmount: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  orderPlaced: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['cartItems']) {
      this.cartItems = navigation.extras.state['cartItems'];
      console.log('Received cartItems in Checkout:', this.cartItems);
    } else {
      console.log('No cartItems found in router state, checking history state');
      const state = window.history.state;
      if (state && state.cartItems) {
        this.cartItems = state.cartItems;
        console.log('Fallback cartItems from history:', this.cartItems);
      } else {
        console.log('No cartItems available');
      }
    }
    this.renderCart();

    document.getElementById('firstName')?.addEventListener('input', this.updateFirstName.bind(this));
    document.getElementById('lastName')?.addEventListener('input', this.updateLastName.bind(this));
    document.getElementById('email')?.addEventListener('input', this.updateEmail.bind(this));
    document.getElementById('phone')?.addEventListener('input', this.updatePhone.bind(this));
    document.querySelector('.place-order')?.addEventListener('click', this.placeOrder.bind(this));
  }

  renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const contactInfoDiv = document.querySelector('.contact-info') as HTMLElement;
    const placeOrderBtn = document.querySelector('.place-order') as HTMLButtonElement;
    if (cartItemsDiv && cartTotalDiv && contactInfoDiv && placeOrderBtn) {
      // Set header only once
      if (!cartItemsDiv.querySelector('.cart-header')) {
        cartItemsDiv.innerHTML = '<div class="cart-header"><span>Product</span><span>Price</span><span>Quantity</span><span>Total</span></div>';
      }

      // Clear existing items but keep header
      const itemsContainer = document.createElement('div');
      itemsContainer.className = 'items-container';
      const existingContainer = cartItemsDiv.querySelector('.items-container');
      if (existingContainer) {
        cartItemsDiv.replaceChild(itemsContainer, existingContainer);
      } else {
        cartItemsDiv.appendChild(itemsContainer);
      }

      if (this.cartItems.length > 0) {
        this.cartItems.forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item';
          itemDiv.innerHTML = `
            <div class="product-info">
              <img src="assets/${item.name.replace(' ', '').toLowerCase()}.png" alt="${item.name}" class="cart-image">
              <span>${item.name}</span>
            </div>
            <span>£E ${item.price}</span>
            <div class="quantity-control">
              <button onclick="decreaseQuantity(${index})">-</button>
              <input type="text" id="quantity${index}" value="${item.quantity}" readonly>
              <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <span id="total${index}">£E ${item.price * item.quantity}</span>
          `;
          itemsContainer.appendChild(itemDiv);
        });
        this.calculateTotal();
        cartTotalDiv.innerHTML = `<span>Total Amount:</span><span>£E ${this.totalAmount}</span>`;

        // Show and enable contact info and place order button
        contactInfoDiv.style.display = 'block';
        placeOrderBtn.disabled = false;
      } else {
        itemsContainer.innerHTML = '<p>No items in cart</p>';
        cartTotalDiv.innerHTML = '<span>Total Amount:</span><span>£E 0</span>';

        // Hide and disable contact info and place order button
        contactInfoDiv.style.display = 'none';
        placeOrderBtn.disabled = true;
      }

      // Attach dynamic event listeners for quantity controls
      this.cartItems.forEach((_, index) => {
        document.getElementById(`quantity${index}`)?.addEventListener('change', (event) => this.onQuantityChange(index, event));
      });
    }
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateQuantityDisplay(index, this.cartItems[index].quantity);
      this.updateTotal(index);
      this.calculateTotal();
      this.renderCart();
    }
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.updateQuantityDisplay(index, this.cartItems[index].quantity);
    this.updateTotal(index);
    this.calculateTotal();
    this.renderCart();
  }

  updateQuantityDisplay(index: number, value: number) {
    const input = document.getElementById(`quantity${index}`) as HTMLInputElement;
    if (input) input.value = value.toString();
  }

  onQuantityChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      const value = parseInt(input.value, 10);
      if (!isNaN(value) && value >= 1) {
        this.cartItems[index].quantity = value;
      } else {
        this.cartItems[index].quantity = 1;
        input.value = '1';
      }
      this.updateTotal(index);
      this.calculateTotal();
      this.renderCart();
    }
  }

  updateTotal(index: number) {
    const totalSpan = document.getElementById(`total${index}`);
    if (totalSpan) {
      totalSpan.textContent = `£E ${this.cartItems[index].price * this.cartItems[index].quantity}`;
    }
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateFirstName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstName = input.value;
  }

  updateLastName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.lastName = input.value;
  }

  updateEmail(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  updatePhone(event: Event) {
    const input = event.target as HTMLInputElement;
    this.phone = input.value;
  }

  placeOrder() {
    this.orderPlaced = true;
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.classList.add('show');
      setTimeout(() => {
        this.orderPlaced = false;
        successMessage.classList.remove('show');
      }, 3000);
    }
  }
}
