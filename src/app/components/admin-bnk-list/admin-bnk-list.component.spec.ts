import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBnkListComponent } from './admin-bnk-list.component';

describe('AdminBnkListComponent', () => {
  let component: AdminBnkListComponent;
  let fixture: ComponentFixture<AdminBnkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBnkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBnkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
