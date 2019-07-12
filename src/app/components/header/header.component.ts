import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loggedIn: boolean;
  public displayName: string;

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return !!this.authService.getSpotifyToken();
  }

  logout(): void {
    this.authService.logout();
    this.loggedIn = false;
  }
}
