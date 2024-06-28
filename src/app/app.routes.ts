import { Routes } from '@angular/router';
import { tabroutes } from './layouts/tabs/tabs.routes';
 
 
export const routes: Routes = [
 
  {
  
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth/auth.page').then((m) => m.AuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      /*{
        path: 'playlist',
        loadComponent: () =>
          import('./pages/playlist/playlist.page').then((m) => m.PlaylistPage),
      },*/
      /*{
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.page').then((m) => m.RegisterPage),
      },*/
    ],
  },
  ...tabroutes,
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  


];
