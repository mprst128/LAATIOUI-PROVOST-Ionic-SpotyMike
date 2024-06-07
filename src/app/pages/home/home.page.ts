import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAlbumComponent } from 'src/app/shared/card-album/card.component'; 

@Component({
  selector: 'app-home-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    NewAlbumComponent, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  elementTitles: string[];
  musiccateg: any[];
  songs: any[];
  albums: any[];

  constructor() {
    this.elementTitles = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
    this.musiccateg = [{ name: 'Category 1' }, { name: 'Category 2' }];
    this.songs = [{ name: 'Song 1' }, { name: 'Song 2' }];
    this.albums = [{ name: 'Album 1' }, { name: 'Album 2' }];
  }
}
