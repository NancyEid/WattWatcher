import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  titleFirst = 'Why Choose WattWacher?';
  descriptionFirst = 'Our smart plug system offers an innovative solution for managing energy consumption in your home. With real-time monitoring, energy-saving alerts, and seamless control over your devices, you can take charge of your electricity use like never before. Whether you’re looking to cut down on your monthly bills or reduce energy waste, our system helps you make smarter choices for a more sustainable future.';
  imageFirst = 'assets/splashh 1.png';

  titleSecond = 'Real-Time Monitoring';
  descriptionSecond = 'With our smart plug system, you can monitor the energy consumption of individual devices in real-time. Whether it’s your refrigerator, air conditioner, or lighting, each appliance’s power usage is displayed on your dashboard. This allows you to identify which devices are using the most power, and optimize your usage accordingly to save money.';
  imageSecond = 'assets/dashboard 1.svg';

  titleThird = 'Device Control';
  descriptionThird = 'Control your appliances with a single tap. Whether you’re at home or away, you can switch devices on and off remotely through our intuitive app. Forget to turn off the lights or the iron? No problem – simply use the app to control your devices anytime, anywhere.';
  imageThird = 'assets/control.png';

  titleFourth = 'Scheduling & Automation';
  descriptionFourth = 'Take the hassle out of managing your appliances with scheduling. Our system lets you automate when devices turn on and off, ensuring optimal usage without you having to remember. You can set times for devices like air conditioners, lights, or water heaters to run only when needed, saving you energy and money.';
  imageFourth = 'assets/Schedule.png';

  titleFifth = 'AI-Powered Chatbot';
  descriptionFifth = 'Our AI-powered chatbot is here to help you with any questions or issues you might have. Whether you need guidance on setting up your smart plug system, troubleshooting a device, or understanding your energy usage reports, the chatbot is available 24/7 to provide instant support. It’s like having a personal energy assistant at your fingertips!';
  imageFifth = 'assets/chatbotpng 1.svg';
}
