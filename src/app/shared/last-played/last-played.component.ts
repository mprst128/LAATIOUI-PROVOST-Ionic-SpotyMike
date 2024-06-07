import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  styleUrls: ['./last-played.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LastPlayedComponent {
  lastPlayedSongs = [
    { name: 'Dusty Roads', artist: 'Jakob Press', image: 'assets/icon/top.png', duration: '5:33' },
    { name: 'Golden Sunset', artist: 'Davis Calzoni', image: 'assets/icon/top1.png', duration: '2:33' },
    { name: 'Lost Soul', artist: 'Jaxson Bergson', image: 'assets/icon/top2.png', duration: '1:33' },
    { name: 'Song Four', artist: 'Artist Four', image: 'assets/icon/top.png', duration: '4:20' },
    { name: 'Song Five', artist: 'Artist Five', image: 'assets/icon/top1.png', duration: '3:45' },
    { name: 'Song Six', artist: 'Artist Six', image: 'assets/icon/top2.png', duration: '2:50' }
  ];
}
