import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_KEY = 'f068c214685fb6173e5098dbc3b4ee2d';
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getCinemaListings(): Observable<any> {
    return this.http
      .get(this.getUrl('/discover/movie'))
      .pipe(map((res: any) => res.results));
  }

  getPopulars(): Observable<any> {
    return this.http
      .get(this.getUrl('/discover/movie'))
      .pipe(map((res: any) => res.results));
  }

  getUrl(path: string): string {
    return `${this.url}${path}?api_key=${this.API_KEY}&language=es-MX&sort_by=popularity.desc&page=1&with_original_language=es`;
  }

  getImageUrl(url: string): string {
    return `http://image.tmdb.org/t/p/w200/${url}`;
  }
}
