import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/User';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly Url = environment.apiUrl;

  id: number = 0;
  user: User = Object();

  constructor(
    private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.Url}/users`)
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.Url}/users/${id}`);
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.Url}/users`, user, { responseType: 'text' as 'json'})
  }

  public deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.Url}/users/${id}`, { responseType: 'text' as 'json'})
  }

  public editUser(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${this.Url}/users/${id}`, user, { responseType: 'text' as 'json'})
  }

  keepUserId(id: number){
    this.id = 0;
    this.id = id;
  }

  getUserId(){
    return this.id;
  }


}
