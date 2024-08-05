import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./layout/header/header.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {SidebarService} from "./layout/sidebar/sidebar.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  providers: [SidebarService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BorderlandsWiki';
}
