import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { routes } from './app.routes';
import { appTitleProvider } from './app.token';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from "@angular/core";

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    appTitleProvider,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: "fr" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
  ]
};


