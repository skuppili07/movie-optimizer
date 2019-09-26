import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() public movieDetail: any;
  public movieTrailerUrl: string;

  constructor() { 
    this.movieTrailerUrl = this.movieDetail;
  }

  ngOnInit() {}

}
