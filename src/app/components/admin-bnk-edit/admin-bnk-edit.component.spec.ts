import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBnkEditComponent } from './admin-bnk-edit.component';

describe('AdminBnkEditComponent', () => {
  let component: AdminBnkEditComponent;
  let fixture: ComponentFixture<AdminBnkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBnkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBnkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
