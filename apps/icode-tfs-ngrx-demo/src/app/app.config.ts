import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { authReducer } from 'libs/shared/util-authentication/src/lib/domain/state/auth.reducer';
import { AuthenticationEffects } from 'libs/shared/util-authentication/src/lib/domain/state/auth.effects';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
      HttpClientModule,
      StoreModule.forRoot(
        { auth: authReducer },
        
      ),
      EffectsModule.forRoot([AuthenticationEffects]),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreModule.forRoot(
        { pacsurls: pacsReducer, auth: authReducer },
      ),
    
    )
  ],
};
