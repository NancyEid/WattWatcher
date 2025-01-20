import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  titleFirst = 'Empowering Smarter Energy Choices for a Sustainable Future';
  descriptionFirst = 'At WattWatcher, we are passionate about revolutionizing the way people think about and use electricity. Rising energy costs and environmental concerns have made it more important than ever to manage electricity consumption effectively. However, most households lack the tools to monitor and control energy usage at the device level, leading to wasted energy and higher bills. Our mission is to bridge this gap by providing an intuitive, smart plug system that empowers users to take charge of their energy usage. With our innovative technology, you can monitor electricity consumption in real time, control appliances remotely, and receive actionable insights to optimize energy usage—all with the goal of saving money and contributing to a greener planet. Whether you’re looking to reduce waste, cut costs, or simply understand your energy habits better, we’re here to help you make smarter energy decisions.';


  title = 'Why Choose Us?';
  titleSecond = 'Innovation'
  descriptionSecond = 'We combine advanced technology with user-friendly design to deliver a seamless experience.';
  icon1 = 'assets/innovation.svg';

  titleSecond2 = 'Efficiency'
  descriptionSecond2 = 'Our system helps you cut costs and save energy effortlessly';
  icon2 = 'assets/Efficiency.svg';

  titleSecond3 = 'Sustainability'
  descriptionSecond3 = 'By reducing energy waste, we contribute to a greener planet.';
  icon3 = 'assets/Sustainability.svg';

  titleSecond4 = 'Support'
  descriptionSecond4 = 'Our team is committed to providing the assistance you need, with 24/7 chatbot support and regular updates.';
  icon4 = 'assets/support.svg';


  titleThird = 'Our Story';
  descriptionThird = 'Our journey began with a shared frustration over skyrocketing electricity bills and a lack of tools to understand energy usage at the device level. Traditional meters only show total household consumption, leaving users in the dark about where energy is wasted. This inspired us to develop a smart plug system that bridges the gap, offering detailed insights and control over individual appliances. What started as an idea has grown into a full-fledged solution, designed to make a difference in everyday lives.';

  titleFourth = 'Join Us on This Journey';
  descriptionFourth = 'At WattWatcher, we’re creating a future where energy management is simple, efficient, and impactful. By choosing our smart plug system, you’re joining a community dedicated to reducing energy waste, saving money, and protecting the planet. Every small step toward smarter energy use makes a big difference. Let us help you take the first step—because a more sustainable future starts with you.';

  titleLast1 = 'Our Mission'
  tittlelast1='Creating a Greener, Smarter Future'
  descriptionLast1 = 'Our mission is simple: to make energy management accessible, efficient, and effective for everyone. By giving users the tools to monitor, control, and optimize their electricity usage, we empower them to save money and reduce energy waste. Together, we can contribute to a sustainable future, one plug at a time.';

  titleLast2 = 'Our Vision'
  tittlelast2 = 'Changing the Way the World Thinks About Energy'
  descriptionLast2 = 'We envision a future where every household has the tools to understand and manage energy consumption effortlessly. By combining technology with sustainable practices, we aim to make energy efficiency a standard part of daily life.';


}
