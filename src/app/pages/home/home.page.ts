import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAlbumComponent } from 'src/app/shared/card-album/card.component'; 
import { CategoryComponent } from 'src/app/shared/category/category.component'; 
import { TopSongsComponent } from 'src/app/shared/top-songs/top-songs.component'; 
import { LastPlayedComponent } from 'src/app/shared/last-played/last-played.component'; 
import { Observable } from 'rxjs';
import { ISong } from 'src/app/core/interfaces/music';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { addSong, loadSong } from 'src/app/core/store/action/song.action';
import { selectStoreList } from '../../core/store/selector/song.selector';


@Component({
  selector: 'app-home-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    NewAlbumComponent, 
    CategoryComponent,
    TopSongsComponent,
    LastPlayedComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  elementTitles: string[];
  musiccateg: any[];
  songs: any[];
  albums: any[];
  song$: Observable<ISong[]> = new Observable<ISong[]>();

  store = inject(Store<AppState>);
  ngOnInit() {
    this.store.dispatch(loadSong());
    const song: ISong = {
      id: 'oijvvoij',
      title: 'edzedzd',
    };
    this.store.dispatch(addSong({ songs: [song, song] }));
    // this.song$ = this.store.select() /// load
    this.song$ = this.store.select(selectStoreList);
  }
    ngAfterViewInit(): void {
      this.song$.subscribe((songs) => {
        console.log(songs);
      })

  };

  constructor() {
    this.elementTitles = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
    this.musiccateg = [{ name: 'Category 1' }, { name: 'Category 2' }];
    this.songs = [{ name: 'Song 1' }, { name: 'Song 2' }];
    this.albums = [{ name: 'Album 1' }, { name: 'Album 2' }];
  }
}

