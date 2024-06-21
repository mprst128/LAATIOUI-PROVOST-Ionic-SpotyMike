import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { i18nProviders } from './app/core/providers/i18n.provider';
import { IonicModule } from '@ionic/angular';
import { LocalStorageService } from './app/core/services/local-storage.service';
import { FirestoreService } from './app/core/services/firestore.service';
import { AudioService } from './app/core/services/audio.service';
import { provideStore } from '@ngrx/store';
import { songReducer } from './app/core/store/reducer/song.reducer';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    i18nProviders,
    AudioService,
    FirestoreService,
    LocalStorageService,
    provideHttpClient(),
    provideIonicAngular(),
    provideRouter(routes),
    provideStore(songReducer),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 50,
        logOnly: environment.production,
      })
    ),
    importProvidersFrom(IonicModule.forRoot()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
});
