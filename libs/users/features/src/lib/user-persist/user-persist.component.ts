import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-user-persist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-persist.component.html',
  styleUrl: './user-persist.component.scss',
})
export class UserPersistComponent {
  constructor(private store: Store){
   this.store.select((state:any)=>state.auth).subscribe(
      s=>{
        console.log(s);
        debugger;
      }
    ); 
  }
  
}
