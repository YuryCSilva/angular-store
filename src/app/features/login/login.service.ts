import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/local.environment';
import { ILoginRequest, ILoginResponse } from 'src/app/types/interfaces/login.interface';
import { IRegisterRequest, IRegisterResponse } from 'src/app/types/interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private HOST = environment.apiHost

  constructor(private http: HttpClient) { }

  register(data: IRegisterRequest) {
    return this.http.post<IRegisterResponse>(`${this.HOST}users`, data);
  }

  login(data: ILoginRequest) {
    return this.http.post<ILoginResponse>(`${this.HOST}auth/login`, data);
  }
}


