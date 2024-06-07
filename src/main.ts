<<<<<<< HEAD
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
=======
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
>>>>>>> 108c280 (first commit)

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { i18nProviders } from './app/core/providers/i18n.provider';
=======
>>>>>>> 108c280 (first commit)

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
<<<<<<< HEAD
    i18nProviders,
    provideHttpClient(),
    provideIonicAngular(),
    importProvidersFrom(IonicModule.forRoot()), 
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
=======
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
>>>>>>> 108c280 (first commit)
  ],
});
