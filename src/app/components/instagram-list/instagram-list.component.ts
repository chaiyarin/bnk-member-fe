import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {

  feeds: Feed[];
  @Input() id: string;

  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.bnkService.instagram(this.id).subscribe((result) => {
      this.feeds = result.feeds;
    });
  }

}
