import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton, IonItem, IonInput, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonInput, IonItem, IonButton, IonButtons, IonToolbar, IonHeader, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
