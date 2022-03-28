import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  loadUsers(search: string = ""): Observable<IUser[]> {
    const query = search ? `?email_like=${search}` : "";
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users/${query}`);
  }
}
