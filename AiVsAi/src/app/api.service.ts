import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://127.0.0.1:5000';


  register(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + '/register', userData);
  }

  login(userData: any){
    return this.http.post(this.apiUrl+'/login',userData)
  }

  verify(userData: any){
    return this.http.post(this.apiUrl+"/verify-code",userData)
  }

  resend(email: string) {
    return this.http.post(this.apiUrl + "/resend-verification-code", { email });
  }

  uploadImage(image: File): Observable<any> {
      const formData = new FormData();
      formData.append('image', image);
      return this.http.post<any>(this.apiUrl+"predict", formData);
  }
//  providers: [provideHttpClient()]
}
