import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'angular-demo';
  
  users: IUser[] | undefined;

  hiddenMessage: boolean = true;

  inputValue: string = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.displayUsers("");
  }
  searchButtonHandler(searchInput: HTMLInputElement): void {
    let { value } = searchInput;
    this.displayUsers(value);
    searchInput.value = "";
  }
  displayUsers(query: string): void {
    this.userService.loadUsers(query).subscribe(users => this.users = users);
  }


  toggleHiddenTextHandler(): void {
    this.hiddenMessage = !this.hiddenMessage;
  }

  alertButtonHandler(event: MouseEvent, ...args: any): void {
    console.log(event);
    console.log(
      `Extra arguments: ${args}`
    );
    alert("Alert button pressed!");
  }

  renderTextInputHandler(input: HTMLInputElement): void {
    this.inputValue = input.value;
    input.value = '';
  }

}
