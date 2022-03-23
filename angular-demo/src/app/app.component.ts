import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  
  hiddenMessage = true;

  inputValue = "";

  users = [
    {
      id: 1,
      name: "Ivan",
      age: 32,
      city: "Sofia"
    },
    {
      id: 2,
      name: "Peter",
      age: 30,
      city: "Varna"
    },
    {
      id: 3,
      name: "George",
      age: 25,
      city: "Plovdiv"
    },
    {
      id: 4,
      name: "Asen",
      age: 29,
      city: "Asenovgrad"
    }
  ];

  addUserFromChildHandler(newUser: IUser): void {
    this.users = this.users.concat(newUser);
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
