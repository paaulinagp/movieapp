import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_KEY: string = 'f068c214685fb6173e5098dbc3b4ee2d';
  private url: string = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  getPopulars(): Observable<any> {
    return this.http.get(this.getUrl('/popular'));
  }

  getUrl(path: string): string {
    return `${this.url}${path}?api_key=${this.API_KEY}&language=es-US&page=1`;
  }
}
