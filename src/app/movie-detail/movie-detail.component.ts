import { Component, OnInit, Input } from '@angular/core';
import { movie } from '../common/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() public movieDetails: movie[];
  public movieTrailerUrl: string;

  constructor() { 
  }

  ngOnInit() {}

}
