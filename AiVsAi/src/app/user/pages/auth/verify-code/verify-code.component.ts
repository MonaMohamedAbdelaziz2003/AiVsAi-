import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ FormsModule,
      HttpClientModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {
  code = '';
  email = '';

  constructor(private http: HttpClient, private router: Router,private ser:ApiService) {}

  ngOnInit(): void {

    this.startCountdown();

  }

   isDisabled: boolean = true; // لتحديد ما إذا كان الزر مفعلًا أو لا
   countdown: number = 180; // عدد الثواني (3 دقائق)
  startCountdown() {
    const interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.isDisabled = false;
        console.log(this.isDisabled)
        clearInterval(interval); // يوقف العد بعد نهاية الدقيقة
      }
    }, 1000)
  }


  verifyCode() {
    if (!this.code || !this.email) {
      alert('Please enter the verification code and your email.');
      return;
    }

    const payload = {
      code: this.code,
      email: this.email
    };

    this.ser.verify(payload).subscribe({
      next: (res: any) => {
        alert('Email verified successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'Verification failed.');
      }
    });
  }

  resend() {
    this.isDisabled = true;
    this.countdown=180
    this.startCountdown();
    const email = this.email;
    this.ser.resend(email).subscribe({
      next: (res: any) => {
        this.isDisabled = true;
        alert('Verification code sent successfully! Check your email.');
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'Failed to resend verification code.');
      }
    });
  }

}
