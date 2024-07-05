import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { addIcons } from 'ionicons';
import { chevronBack, ellipsisHorizontal } from 'ionicons/icons';
import { Router} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonIcon, IonButton, IonTitle, IonCol, IonRow, IonToolbar, CommonModule, FormsModule]
})
export class ArtistPage implements OnInit {

  constructor(private _location: Location, private router: Router) {
    addIcons({ chevronBack, ellipsisHorizontal })
    /*redirection(){
        this.router.redirection(['/home/playerSong.page'])
      }*/
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

 goToOneArtist() {
  console.log('goToOneArtist');
  this.router.navigate(['home/oneArtist']);
 }

 goToFavorites() {
  console.log('goToFavorites');
  this.router.navigate(['home/favorites']);
 }

}