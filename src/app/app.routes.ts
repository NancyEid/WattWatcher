import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HowitworksComponent } from './pages/howitworks/howitworks.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BuyproductComponent } from './pages/buyproduct/buyproduct.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'howitworks', component: HowitworksComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'buyproduct', component: BuyproductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: PagenotfoundComponent },
];
