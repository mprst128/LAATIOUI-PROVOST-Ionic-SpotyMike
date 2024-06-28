import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
 
export const tabroutes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../../pages/favorites/favorites.page').then((m) => m.FavoritesPage),
      },

      {
        path: 'playlist',
        loadComponent: () =>
          import('../../pages/playlist/playlist.page').then((m) => m.PlaylistPage),
      },

      {
        path: 'playerSong',
        loadComponent: () =>
          import('../../pages/playerSong/playerSong.page').then((m) => m.PlayerSongPage),
      },

      {
        path: 'playerSong/:id',
        loadComponent: () =>
          import('../../pages/playerSong/playerSong.page').then((m) => m.PlayerSongPage),
      },
     
      {
        path: 'listMusic',
        loadComponent: () =>
          import('../../pages/listMusic/listMusic.page').then((m) => m.ListMusicPage),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full',
      },
    ],
  },
];