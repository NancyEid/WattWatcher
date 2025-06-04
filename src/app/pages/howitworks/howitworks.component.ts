import { Component } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  standalone: true,
  imports: [],
  templateUrl: './howitworks.component.html',
  styleUrl: './howitworks.component.scss'
})
export class HowitworksComponent {
  titleFirst = 'How WattWatcher Works';
  descriptionFirst = 'See how WattWatcher helps you take control of your power usage with just a few taps.';
  imageFirst = 'assets/first.png';

  titleSecond = 'Install Smart Plug';
  descriptionSecond = 'Connect our WattWatcher smart plugs to your electrical devices at home, in hotels, or businesses. These plugs monitor electricity usage in real time.';
  imageSecond = 'assets/second.png';
  dotimage = 'assets/firstdots.png';

  titleThird = 'Connect to the App';
  descriptionThird = 'Download the WattWatcher mobile app and connect it to your smart plugs via Wi-Fi. Setup is quick, and pairing takes just a few steps.';
  imageThird = 'assets/third.png';
  dotimage1 = 'assets/seconddots.png';

  titleFourth = 'Monitor Your Energy';
  descriptionFourth = 'Use the app’s dashboard to view real-time energy usage, device-specific consumption, and energy trends.';
  imageFourth = 'assets/fourth.png';

  titleFifth = 'Control your devices';
  descriptionFifth = 'Turn devices on or off remotely, set schedules, or automate their operation based on your daily routine or energy goals.';
  imageFifth = 'assets/fifth.png';

  titleSixth = 'Control your devices';
  descriptionSixth = 'Use the app’s dashboard to view real-time energy usage, device-specific consumption, and energy trends.';
  imageSixth = 'assets/sixth.png';

  titleSeventh = 'Stay Notified';
  descriptionSeventh = 'Get alerts when your energy usage spikes, a device malfunctions, or you’re reaching your monthly energy target.';
  imageSeventh = 'assets/seventh.png';
}
