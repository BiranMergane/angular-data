import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent{
  names: string[]; 
  constructor() { 
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; 
  }
  ngOnInit() {
  }
}
