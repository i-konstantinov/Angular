import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user$ = this.userService.user$;
  constructor(
    activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    activatedRoute.params
    .subscribe(({ id }) => this.userService.loadUserById(id));
  }
}
