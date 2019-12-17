import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwsomeService} from '../awsome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awsome-new',
  templateUrl: './awsome-new.component.html',
  styleUrls: ['./awsome-new.component.scss']
})
export class AwsomeNewComponent implements OnInit {
  awsomeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private awsomeService: AwsomeService,
              private router: Router) {
  }

  ngOnInit() {
    this.awsomeForm = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
  }

  onSubmit() {
    if (confirm('Are You Sure?')) {
      this.awsomeService.addAwsome(this.awsomeForm.value).subscribe(re =>{
        this.router.navigateByUrl('/awsome');
      });
    }
  }
}
