import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {
  @Input()
  userArray: IUser[] = [];

  @Output()
  addUser = new EventEmitter<IUser>();
  
  constructor() {
    console.log("In constructor:");
    console.log(this.userArray); // []
  }

  ngOnInit(): void {
    console.log("OnInit:");
    console.log(this.userArray); // [ {}, {}, {}, {} ]
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log("Simple changes:")
    console.log(simpleChanges);
  }

  addUserFromInputHandler(nameInput: HTMLInputElement, ageInput: HTMLInputElement, cityInput: HTMLInputElement): void {
    let lastUserId = undefined;
    if (this.userArray.length == 0) {
      lastUserId = 1;
    } else {
      lastUserId = this.userArray[this.userArray.length - 1].id + 1;
    }
    this.addUser.emit({
      id: lastUserId,
      name: nameInput.value,
      age: ageInput.valueAsNumber,
      city: cityInput.value
    });
    // чистим полетата след добавянето
    [nameInput, ageInput, cityInput].forEach(e => e.value = '');
  }
}
