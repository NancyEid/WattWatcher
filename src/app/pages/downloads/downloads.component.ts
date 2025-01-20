import { Component } from '@angular/core';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss'
})
export class DownloadsComponent {
image1= "assets/image 1.svg"
image2= "assets/image 2.svg"
mainImage= "assets/screen.svg"



title = 'Download WattWatcher and Unlock These Features';
descriptionSecond = 'Monitor your energy consumption in real-time.';
icon1 = 'assets/1.svg';

descriptionSecond2 = 'Manage devices and schedule operations.';
icon2 = 'assets/2.svg';

descriptionSecond3 = 'Receive detailed weekly and monthly energy reports.';
icon3 = 'assets/3.svg';

descriptionSecond4 = 'Get alerts for unusual energy spikes.';
icon4 = 'assets/4.svg';
}
