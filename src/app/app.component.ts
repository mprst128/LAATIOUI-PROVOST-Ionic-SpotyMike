<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
=======
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
>>>>>>> 108c280 (first commit)

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  constructor() {}
  ngOnInit(): void {
    this.translate.use('fr_FR');
    this.translate.setDefaultLang('fr_FR');
  }
=======
export class AppComponent {
  constructor() {}
>>>>>>> 108c280 (first commit)
}
