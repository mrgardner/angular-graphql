import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly state: string;
  private readonly loginURI: string;
  constructor(private utilService: UtilService, private router: Router) {
    this.state = this.generateRandomString(16);
    const query =
      `response_type=${environment.spotify.loginResponseType}` +
      `&client_id=${environment.spotify.clientID}` +
      `&scope=${environment.spotify.scope}` +
      `&redirect_uri=${environment.spotify.redirectURI}` +
      `&state=${this.state}`;
    this.loginURI = environment.spotify.authURI + query;
  }

  login(): void {
    const popup = window.open(
      this.loginURI,
      'Login with Spotify',
      'width=800, height=800'
    );

    window['spotifyCallback'] = () => {
      const authToken = popup.location.hash.split('#access_token=')[1].split('&')[0];
      const expiredDate = new Date();
      expiredDate.setHours(expiredDate.getHours() + 1);
      this.utilService.setCookie('spotifyToken', authToken, expiredDate.toUTCString());
      popup.close();
      this.router.navigate(['']);
    };
  }

  logout(): void {
    this.utilService.clearCookie('spotifyToken');
    this.router.navigate(['login']);
    localStorage.clear();
  }

  getSpotifyToken(): string {
    return this.utilService.getCookie('spotifyToken');
  }

  generateRandomString(length) {
    let text = '';
    const possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
