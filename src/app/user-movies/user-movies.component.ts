import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { MovieAdmin } from '../interfaces/movi-admin';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css'],
})
export class UserMoviesComponent implements OnInit {
  movies: MovieAdmin[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}

