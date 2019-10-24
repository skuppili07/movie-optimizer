import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { movie } from '../common/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  public getMovies(): Observable<movie[]> {
    return this.httpClient.get<movie[]>('assets/common/movies.json');
  }
}
