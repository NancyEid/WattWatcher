import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements AfterViewInit {
  cartItems: { name: string, quantity: number, price: number }[] = [];
  totalAmount: number = 0;
  orderPlaced: boolean = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+20\d{10}$/)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      deliveryPhoneNumber: ['', [Validators.required, Validators.pattern(/^\+20\d{10}$/)]],
      paymentMethod: ['creditCard', Validators.required],
      cardholderName: [''],
      cardNumber: [''],
      expiryDate: [''],
      cvv: ['']
    });

    // Dynamically update validators based on payment method
    this.form.get('paymentMethod')?.valueChanges.subscribe(value => {
      if (value === 'creditCard') {
        this.form.get('cardholderName')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
        this.form.get('cardNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{16}$/)]);
        this.form.get('expiryDate')?.setValidators([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]);
        this.form.get('cvv')?.setValidators([Validators.required, Validators.pattern(/^\d{3,4}$/)]);
      } else {
        this.form.get('cardholderName')?.clearValidators();
        this.form.get('cardNumber')?.clearValidators();
        this.form.get('expiryDate')?.clearValidators();
        this.form.get('cvv')?.clearValidators();
        this.form.get('cardholderName')?.reset();
        this.form.get('cardNumber')?.reset();
        this.form.get('expiryDate')?.reset();
        this.form.get('cvv')?.reset();
      }
      this.form.get('cardholderName')?.updateValueAndValidity();
      this.form.get('cardNumber')?.updateValueAndValidity();
      this.form.get('expiryDate')?.updateValueAndValidity();
      this.form.get('cvv')?.updateValueAndValidity();
      this.updatePlaceOrderButton();
    });

    // Subscribe to form status changes to update button state
    this.form.statusChanges.subscribe(() => {
      this.updatePlaceOrderButton();
    });
  }

  ngAfterViewInit() {
    this.route.paramMap.subscribe(() => {
      const state = this.route.snapshot.paramMap.get('state') || window.history.state;
      if (state && state.cartItems) {
        this.cartItems = state.cartItems;
        console.log('Received cartItems from route/state:', this.cartItems);
      } else {
        console.log('No cartItems in route/state, initializing empty');
        this.cartItems = [];
      }
      this.renderCart();
    });
  }

  renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const formElement = document.querySelector('form') as HTMLFormElement;
    const placeOrderBtn = document.querySelector('.place-order') as HTMLButtonElement;

    if (cartItemsDiv && cartTotalDiv && formElement && placeOrderBtn) {
      if (!cartItemsDiv.querySelector('.cart-header')) {
        cartItemsDiv.innerHTML = '<div class="cart-header"><span>Product</span><span>Price</span><span>Quantity</span><span>Total</span></div>';
      }

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
            <span class="price"><span>£E</span> ${item.price}</span>
            <div class="quantity-control">
              <span id="quantity${index}">${item.quantity}</span>
            </div>
            <span id="total${index}"><span>£E </span>${item.price * item.quantity}</span>
          `;
          itemsContainer.appendChild(itemDiv);
        });
        this.calculateTotal();
        cartTotalDiv.innerHTML = `<span>Total Amount:</span><span>£E ${this.totalAmount}</span>`;

        formElement.style.display = 'block';
        placeOrderBtn.disabled = this.form.invalid;
      } else {
        itemsContainer.innerHTML = '<p>No items in cart</p>';
        cartTotalDiv.innerHTML = '<span>Total Amount:</span><span>£E 0</span>';

        formElement.style.display = 'none';
        placeOrderBtn.disabled = true;
      }
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

  selectPaymentMethod(method: string) {
    this.form.get('paymentMethod')?.setValue(method);
    this.updatePlaceOrderButton();
  }

  updatePlaceOrderButton() {
    const placeOrderBtn = document.querySelector('.place-order') as HTMLButtonElement;
    if (placeOrderBtn) {
      placeOrderBtn.disabled = this.form.invalid;
      console.log('Form valid:', this.form.valid, 'Button disabled:', placeOrderBtn.disabled);
    }
  }

  onSubmit() {
    console.log('Form submitted, valid:', this.form.valid, 'Values:', this.form.value);
    if (this.form.valid) {
      this.orderPlaced = true;
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.classList.add('show');
      }
      setTimeout(() => {
        this.orderPlaced = false;
        if (successMessage) {
          successMessage.classList.remove('show');
        }
        this.form.reset();
        this.cartItems = [];
        this.renderCart();
        this.router.navigate(['/buyproduct']);
      }, 1500);
    }
  }
}
