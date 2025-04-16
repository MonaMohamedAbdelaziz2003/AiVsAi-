import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private imageUploadService: ApiService) {}
  selectedFile: File | null = null;
  prediction: string = '';

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          this.prediction = `${response.prediction}`;
        },
        (error) => {
          console.error('Error uploading image:', error);
          this.prediction = 'Failed to get prediction.';
        }
      );
    } else {
      alert('Please select an image first.');
    }


    // Simulate file upload
    // console.log('Uploading file:', this.selectedFile.name);
    // alert(`File "${this.selectedFile.name}" uploaded successfully!`);
  }
}
