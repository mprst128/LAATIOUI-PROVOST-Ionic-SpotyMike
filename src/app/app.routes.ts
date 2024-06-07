import { Routes } from '@angular/router';
<<<<<<< HEAD
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
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
 
  ...tabroutes,
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  


];
=======

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth.page/auth.page').then( m => m.AuthPage)
  },

  {
    path: 'login',
    loadComponent: () => import('./layouts/auth.page/auth.page').then( m => m.AuthPage),
    resolve:{
      component: AuthService.getPageAuth(),
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./layouts/auth.page/auth.page').then( m => m.AuthPage),
    resolve:{
      component: EAuthPage.Register,
    }
  }
];
>>>>>>> 108c280 (first commit)
