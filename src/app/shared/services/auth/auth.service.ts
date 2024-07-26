import { Injectable } from '@angular/core';
import { SubjectService } from '../subject/subject.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/types/interfaces/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends SubjectService<ILoginResponse> {
  
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    super();
    this.autoSignIn();
  }

  get TOKEN() {
    return this.getValue().access_token ?? null;
  }

  get REFRESH_TOKEN() {
    return this.getValue().refresh_token ?? null;
  }

  get ACTIVED() {
    return !!this.TOKEN;
  }

  autoSignIn() {
    if(this.cookieService.get('token')) {
      this.setState({access_token: this.cookieService.get('token'), refresh_token: this.cookieService.get('refresh_token') ?? null}); 
      this.router.navigate(['/home']);
    }
  }

  signIn(data: ILoginResponse){
    this.cookieService.set('token', data.access_token);
    this.cookieService.set('refresh_token', data.refresh_token);
    this.setState(data);
    this.router.navigate(['/home']);
  }

  signOut() {
    if(this.TOKEN)this.cookieService.delete('token');
    if(this.REFRESH_TOKEN) this.cookieService.delete('refresh_token');
    this.clearState();
    this.router.navigate(['/login']);
  }
}
