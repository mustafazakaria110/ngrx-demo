import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { login } from '../../domain/state/auth.actions';
import { AuthState } from '../../domain/state/auth.reducer'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AuthenticationEffects } from '../../domain/state/auth.effects';
import { AuthService } from '../../domain/services/authentication.service';


@Component({
  selector: 'lib-login',
  standalone: true,
  providers: [AuthService],
  imports: [CommonModule,FormsModule,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  Year: number = new Date().getFullYear();
  message = 'Invalid Username or passward';
  username: string = '';
  password: string = '';
  isAuthenticated$:any;
  authenticated$: any;
  constructor(private store: Store<{ auth: AuthState }>, private router: Router,) {
    this.authenticated$ = this.store.pipe(select(state => state.auth.authenticated));
  }
  onLogin() {
    this.store.dispatch(login({ username: this.username , password:this.password }));
  }
}
