import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { HeaderComponent } from "./user/layouts/header/header.component";
import { FirstHomeComponent } from "./user/pages/first-home/first-home.component";
import { ChatComponent } from "./user/pages/afterLogin/chat/chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FirstHomeComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AiVsAi';
}
