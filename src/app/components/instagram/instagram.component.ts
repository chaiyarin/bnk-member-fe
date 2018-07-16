import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
   }

   id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('instagramId');
  }

}
