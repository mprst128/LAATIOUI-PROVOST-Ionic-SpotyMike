import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TopSongsComponent {
  songs = [
    { name: 'Amelia Cantata', album: 'Starry Skies', image: 'assets/icon/top.png' },
    { name: 'Olivia Lyric', album: 'Sunset Serenity', image: 'assets/icon/top1.png' },
    { name: 'Mason Chorus', album: 'Eternal Sunset', image: 'assets/icon/top2.png' }
  ];
}
