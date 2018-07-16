import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-admin-bnk-edit',
  templateUrl: './admin-bnk-edit.component.html',
  styleUrls: ['./admin-bnk-edit.component.css']
})
export class AdminBnkEditComponent implements OnInit {

  id: string;
  member: Member;
  editForm: FormGroup;
  constructor(private router: ActivatedRoute, private router2: Router, private bnkService: BnkService, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.bnkService.getMember(this.id).subscribe(result => {
      this.member = result;
      // this.editForm = this.fb.group(result);
      this.editForm = this.fb.group({
        _id: result._id,
        name: [result.name, Validators.required],
        imgUrl: [result.imgUrl, [Validators.required, UrlValidator.validate]],
        instagramId: [result.instagramId, Validators.required]
      });
      this.editForm.markAsPristine();
      this.editForm.markAsUntouched();
    });
  }

  resetDataMember() {
    this.editForm.reset(this.member);
  }

  save() {
    if (this.editForm.valid) {
      this.bnkService.update(this.editForm.value).subscribe(result => {
        this.router2.navigate(['/dashboard']);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
    } else {
      alert('คุณกรอกข้อมูลไม่ครบถ้วนกรุณากรอกใหม่ โปรดหาช่องโปรดระบุ และ ทำการเติมข้อมูลให้ครบ');
    }
  }

}
