import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { charactersReducer } from './store/character/character.reducer';
import { provideState, provideStore } from '@ngrx/store';
import { createFeature } from '@ngrx/store';

// Créer une fonctionnalité pour les utilisateurs
export const usersFeature = createFeature({
  name: 'character', 
  reducer: charactersReducer 
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState(usersFeature)
  ]
};
