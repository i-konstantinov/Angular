import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list-entry',
  templateUrl: './user-list-entry.component.html',
  styleUrls: ['./user-list-entry.component.css']
})
export class UserListEntryComponent implements OnInit {
  @Input()
  user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
