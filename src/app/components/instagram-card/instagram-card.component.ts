import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-instagram-card',
  templateUrl: './instagram-card.component.html',
  styleUrls: ['./instagram-card.component.css']
})
export class InstagramCardComponent implements OnInit {

  @Input() feed: Feed;
  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log('sadfdsafs');
  }

}
