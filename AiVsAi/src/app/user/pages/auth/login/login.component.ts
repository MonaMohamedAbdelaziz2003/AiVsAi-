import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,ReactiveFormsModule,
      HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,private fb: FormBuilder,private ser:ApiService) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.ser.login(loginData).subscribe({
      next: (res:any) => {
        console.log(res.role);
if(res.role=="user"){
  this.router.navigate(['/user']);
}else{
  this.router.navigate(['/admin']);

}
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'login failed.');
      }
    })
  }
}
