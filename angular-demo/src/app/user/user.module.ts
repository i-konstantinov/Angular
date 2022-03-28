import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListEntryComponent } from './user-list-entry/user-list-entry.component';
import { UserService } from './user.service'; 


@NgModule({
  declarations: [
    UserListComponent,
    UserListEntryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
