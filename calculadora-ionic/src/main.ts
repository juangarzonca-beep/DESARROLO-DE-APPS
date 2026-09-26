import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/provide';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [...appConfig.providers, provideIonicAngular({})],
}).catch((err) => console.error(err));
