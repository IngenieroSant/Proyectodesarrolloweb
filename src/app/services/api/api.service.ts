// services/api/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieAdmin } from '../../interfaces/movi-admin';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:4200/api/movies'; // Cambia según tu backend

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieAdmin[]> {
    return this.http.get<MovieAdmin[]>(this.baseUrl);
  }

  addMovie(movie: MovieAdmin): Observable<MovieAdmin> {
    return this.http.post<MovieAdmin>(this.baseUrl, movie);
  }

  editMovie(id: string, movie: MovieAdmin): Observable<MovieAdmin> {
    return this.http.put<MovieAdmin>(`${this.baseUrl}/${id}`, movie);
  }

  deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

