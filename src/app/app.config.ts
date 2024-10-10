import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { charactersReducer } from './store/character/character.reducer';
import { provideStore } from '@ngrx/store';
import { blockReducer } from './store/block/block.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({
      character: charactersReducer,
      block: blockReducer
    })
  ]
};
