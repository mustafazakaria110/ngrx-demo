import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { pacsReducer } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom(
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreModule.forRoot(
        { pacsurls: pacsReducer },
      ),
    
    )
  ],
};
