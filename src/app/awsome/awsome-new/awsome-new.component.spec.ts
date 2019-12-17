import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsomeNewComponent } from './awsome-new.component';

describe('AwsomeNewComponent', () => {
  let component: AwsomeNewComponent;
  let fixture: ComponentFixture<AwsomeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsomeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
