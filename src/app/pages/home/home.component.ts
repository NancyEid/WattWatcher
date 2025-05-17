import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  // Your existing content
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

  // Loading animation control
  showLoading = true;

  constructor() {
    // Simulate loading completion
    setTimeout(() => {
      this.showLoading = false;
    }, 1200);
  }

  ngAfterViewInit() {
    this.initializeAnimations();
  }

  private initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Optional: Unobserve after animation triggers
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-section').forEach(section => {
      observer.observe(section);
    });
  }
}

