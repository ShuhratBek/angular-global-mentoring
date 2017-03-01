import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';

@Component({
  selector: 'home',
  providers: [
    Title
  ],
  styleUrls: [ 'home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        public title: Title
    ) {}

    public ngOnInit() {
        console.log('hello `Home` component');
    }

}
