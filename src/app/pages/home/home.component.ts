import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  titleFirst = 'Smart Energy, Smart Savings';
  descriptionFirst = 'Connect your smart plugs and reduce energy costs today.';
  imageFirst = 'assets/Home1.svg';

  titleSecond = 'Take Control of Your Energy Usage';
  descriptionSecond = 'Monitor, control, and save on electricity costs with ease. WattWatcher helps you track your devices in real-time, identify energy waste, and reduce your monthly bills.';
  imageSecond = 'assets/home2.svg';

  titleThird = 'Stay Informed, Anytime, Anywhere';
  descriptionThird = 'Get live updates on energy consumption for every device in your home. See where your energy is going and make adjustments instantly.';
  imageThird = 'assets/home3.svg';

  titleFourth = 'Never Miss a Beat';
  descriptionFourth = 'Receive notifications when your energy usage spikes or devices fail. Get customized reports and recommendations to help save more.';
  imageFourth = 'assets/home4.svg';


}

