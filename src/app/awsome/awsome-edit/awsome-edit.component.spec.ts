import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsomeEditComponent } from './awsome-edit.component';

describe('AwsomeEditComponent', () => {
  let component: AwsomeEditComponent;
  let fixture: ComponentFixture<AwsomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
