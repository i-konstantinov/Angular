import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListEntryComponent } from './user-list-entry/user-list-entry.component';
import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component'; 
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserListEntryComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
