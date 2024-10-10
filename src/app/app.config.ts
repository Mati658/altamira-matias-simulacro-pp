import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simulacro-pp-1eda4',
        appId: '1:867879589195:web:ed788be60c3f61892804ce',
        storageBucket: 'simulacro-pp-1eda4.appspot.com',
        apiKey: 'AIzaSyD4No-NgcTwfe-Eg8xoePld1KLc7XX0bIc',
        authDomain: 'simulacro-pp-1eda4.firebaseapp.com',
        messagingSenderId: '867879589195',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
