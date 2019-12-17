import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Awsome} from '../awsome';
import {AwsomeService} from '../awsome.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-awsome-edit',
  templateUrl: './awsome-edit.component.html',
  styleUrls: ['./awsome-edit.component.scss']
})
export class AwsomeEditComponent implements OnInit {
  awsomeForm: FormGroup;
  awsome: Awsome;

  constructor(private awsomeService: AwsomeService,
              private router: Router,
              private dataTransferService: DataTransferService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.awsome = this.dataTransferService.getData();
    this.awsomeForm = this.fb.group({
      id: [this.awsome.id],
      tag: [this.awsome.tag],
      url: [this.awsome.url],
      descriptions: [this.awsome.descriptions]
    });
  }

  onSubmit() {
    if (confirm('Are You Sure You Wanna Update this awsome?')) {
      this.awsomeService.editAwsome(this.awsomeForm.value).subscribe(re => {
        this.router.navigateByUrl('/awsome');
      });
    }
  }

  deleteAwsome() {
    if (confirm('Are You Sure You Wanna delete this awsome?')) {
      this.awsomeService.deleteAwsome(this.awsome).subscribe(re => {
        this.router.navigateByUrl('/awsome');
      });
    }
  }
}
