import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myInput: string;
  public movies: string;
  public movie: any;
  public shouldShow: boolean;

  constructor(private movieService: MoviesService) {}

  onInput(input): void {
    this.myInput = input.target.value;
    if (this.myInput.length > 3) {
      this.movieService.getMovies().subscribe((values) => {
        for(var i = 0; i < values.length; i++) {
        if(values[i].name.toLowerCase().startsWith(this.myInput.toLowerCase())) {
          this.movies = values[i].name;
          this.movie = values[i].trailer;
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
