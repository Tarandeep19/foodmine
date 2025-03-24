import { Component } from '@angular/core';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { RouterOutlet } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet,CartPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
