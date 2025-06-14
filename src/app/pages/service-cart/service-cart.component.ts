import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-cart',
  templateUrl: './service-cart.component.html',
  styleUrls: ['./service-cart.component.scss']
})
export class ServiceCartComponent {
  @Input() cartItems: { name: string, quantity: number, price: number }[] = [];
}
