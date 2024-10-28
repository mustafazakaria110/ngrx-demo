import { ApplicationConfig, importProvidersFrom, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { authReducer } from 'libs/shared/util-authentication/src/lib/domain/state/auth.reducer';
import { AuthenticationEffects } from 'libs/shared/util-authentication/src/lib/domain/state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { pacsReducer } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthInterceptor} from '@icode-tfs-ngrx-demo/util-common'
import { UsersEffects, usersReducer } from '@icode-tfs-ngrx-demo/user-domain';
import { DateRangeEffects, dateRangeReducer  } from '@icode-tfs-ngrx-demo/util-date-range';
import { FilterService } from '@progress/kendo-angular-grid';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    FilterService,
    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreModule.forRoot(
        { pacsurls: pacsReducer, auth: authReducer, router: routerReducer, users:usersReducer , dateRange : dateRangeReducer},
      ),
      EffectsModule.forRoot([AuthenticationEffects,UsersEffects , DateRangeEffects]),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
    )
  ],
};
