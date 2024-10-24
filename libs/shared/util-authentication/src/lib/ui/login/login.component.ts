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

  constructor(private store: Store<{ auth: AuthState }>, private router: Router,) {}

  onLogin() {
    this.store.dispatch(login({ username: this.username , password:this.password }));
    // Navigate after a short delay to allow the state to update
    // this.store.select('auth').subscribe(AuthState => {
    //   if (AuthState.role === 'admin') {
    //     this.router.navigate(['/admin/users']);
    //   } else if (AuthState.role === 'user') {
    //     this.router.navigate(['/users']);
    //   }
    //   else{
    //     this.message = 'Invalid username or password.';
    //   }
    // });
  }

}
