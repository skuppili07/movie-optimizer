import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { movie, videoLinks } from '../common/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myInput: string;
  public movieName: string;
  public movies: movie[];
  public shouldShow: boolean;

  constructor(private movieService: MoviesService) {}

  onInput(input): void {
    this.myInput = input.target.value;
    this.movies = [];
    this.movieName = '';
    if (this.myInput.length > 3) {
      this.movieService.getMovies().subscribe((values: movie[]) => {
        for(var i = 0; i < values.length; i++) {
        if(values[i].name.toLowerCase().startsWith(this.myInput.toLowerCase())) {
          this.movieName = values[i].name;
          this.shouldShow = true;
          this.movies.push(values[i]);
        }
      }
      });
    }
  }

  onCancel(output): void {
    console.log('cancel has been clciked');
  }

  buttonClick(): void {
    this.shouldShow = true;
    console.log('button has been clciked');
  }
}
