import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {

  constructor(private http: HttpClient) {}

  getUserRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${environment.baseURL}/users/${username}/repos`);
  }
}
