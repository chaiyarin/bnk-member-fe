import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-bnk-list',
  templateUrl: './admin-bnk-list.component.html',
  styleUrls: ['./admin-bnk-list.component.css']
})
export class AdminBnkListComponent implements OnInit {

  members: Member[];

  constructor(private bnkService: BnkService, private router: Router) { }

  ngOnInit() {
    this.bnkService.list().subscribe((result) => {
      this.members = result;
    });
  }

}
