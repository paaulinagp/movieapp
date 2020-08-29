import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesPopular: any[] = [];

  constructor(public moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.moviesService.getPopulars().subscribe((resp) => {
      console.log(resp);

      this.moviesPopular = resp;
    });
  }

  sendMovie(movie: any): void {
    this.router.navigate(['pelicula', movie.id]);
  }
}
