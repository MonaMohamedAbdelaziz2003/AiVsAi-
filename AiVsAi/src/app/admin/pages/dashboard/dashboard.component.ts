import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  numberOfUsers: number = 120;
  numberOfImagesGenerated: number = 350;
  numberOfImagesDetected: number = 50; 

}
