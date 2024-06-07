import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Import CUSTOM_ELEMENTS_SCHEMA


@Component({
  selector: 'app-home-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Use CUSTOM_ELEMENTS_SCHEMA here
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