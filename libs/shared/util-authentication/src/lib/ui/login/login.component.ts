import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { login } from '../../domain/state/auth.actions';
import { AuthState } from '../../domain/state/auth.reducer'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AuthenticationEffects } from '../../domain/state/auth.effects';
import { AuthService } from '../../domain/services/authentication.service';
// import { authenticatedUser } from '../../domain/state/auth.selectors';


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
  message = '';
  username: string = '';
  password: string = '';
  isAuthenticated$:any;

  constructor( private store2: Store , private store: Store<{ auth: AuthState }>, private router: Router,) {
     
    

  }

  onLogin() {

    this.store.dispatch(login({ username: this.username , password:this.password }));

  }

}
