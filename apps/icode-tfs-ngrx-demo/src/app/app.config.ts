import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'libs/shared/util-authentication/src/lib/domain/state/auth.reducer';
import { AuthenticationEffects } from 'libs/shared/util-authentication/src/lib/domain/state/auth.effects';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
      })
    )
  ],
};
