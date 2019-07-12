import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SpotifyGuard } from './guards/spotify-guard.guard';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SpotifyGuard]},
  { path: 'callback', component: CallbackComponent},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }