import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingupRequest } from './signup-request.interface';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(data: SingupRequest): Observable<any> {
    return this.http.post('https://demo-api.now.sh/users', data);
  }
}
