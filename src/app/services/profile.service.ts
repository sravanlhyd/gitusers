import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getUsersFromApi(): Observable<Data[]> {
    return this.http.get<Data[]>('https://api.github.com/users')
  }

}
