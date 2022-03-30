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
export class UserDetailsComponent implements OnInit {
  user!: IUser;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }
  
  ngOnInit(): void {
    // this.userService
    // .loadUserById(this.activatedRoute.snapshot.params['id'])
    // .subscribe(data => this.user = data);
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.userService.loadUserById(id))
    )
    .subscribe(
      data => this.user = data
    )
  }  
}
