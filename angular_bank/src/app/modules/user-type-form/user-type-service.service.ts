import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from 'src/app/core/models/UserType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {
  private readonly Url = environment.apiUrl;
  id: number =0;

  constructor(
    private http: HttpClient) { }

  getUserTypes(): Observable<any>{
    return this.http.get(`${this.Url}/userTypes`)
  }

  getUserType(id: number): Observable<UserType>{
    return this.http.get<UserType>(`${this.Url}/userTypes/${id}`);
  }

  public addUserType(userType: UserType): Observable<UserType>{
    return this.http.post<UserType>(`${this.Url}/userTypes`, userType, { responseType: 'text' as 'json'})
  }

  public deleteUserType(id: number): Observable<any>{
    return this.http.delete(`${this.Url}/userTypes/${id}`, { responseType: 'text' as 'json'})
  }

  public editUserType(id: number, userType: UserType): Observable<UserType>{
    return this.http.put<UserType>(`${this.Url}/userTypes/${id}`, userType, { responseType: 'text' as 'json'})
  }

  keepUserTypeId(id: number){
    this.id = 0;
    this.id = id;
  }

  getUserTypeId(){
    return this.id;
  }

}
