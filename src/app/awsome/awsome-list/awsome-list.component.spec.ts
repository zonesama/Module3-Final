import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsomeListComponent } from './awsome-list.component';

describe('AwsomeListComponent', () => {
  let component: AwsomeListComponent;
  let fixture: ComponentFixture<AwsomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
