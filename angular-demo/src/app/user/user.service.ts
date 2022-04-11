import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {
  // никой от вън не може да достъпва users и да вкарва стойности с next();
  // потока users$ ще е публичен и ще може да бъде събскрайван;
  private users = new BehaviorSubject<IUser[] | null>(null);
  users$ = this.users.asObservable();

  private user = new BehaviorSubject<IUser | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers = (search: string = "") => {
    const query = search ? `?email_like=${search}` : "";
    this.http.get<IUser[]>(`/api/users/${query}`, {
      withCredentials: true,
      headers: {
        'Content-type' : 'application/json'
      }
    }).subscribe((data) => this.users.next(data));
  }

  loadUserById = (id: number) => {
    this.http.get<IUser>(`/api/users/${id}`)
    .subscribe((data) => this.user.next(data));
  }
}