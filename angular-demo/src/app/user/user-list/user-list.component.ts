import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) { }
  users$ = this.userService.users$;
  displayUsers = this.userService.loadUsers;
  ngOnInit(): void {
    this.displayUsers('');
  }
  searchButtonHandler(searchInput: HTMLInputElement): void {
    let { value } = searchInput;
    this.displayUsers(value);
    searchInput.value = "";
  }
}
