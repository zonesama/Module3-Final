import {Component, OnInit} from '@angular/core';
import {Awsome} from '../awsome';
import {Router} from '@angular/router';
import {AwsomeService} from '../awsome.service';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-awsome-list',
  templateUrl: './awsome-list.component.html',
  styleUrls: ['./awsome-list.component.scss']
})
export class AwsomeListComponent implements OnInit {
  p = 1;
  count = 6;
  awsomeList: Awsome[];

  constructor(private router: Router,
              private awsomeService: AwsomeService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    // if (this.awsomeService.getCurrentAwsomeList() !== undefined) {
    //   this.refreshAwsomeList();
    // } else {
      this.awsomeService.getAwsomeList().subscribe(data => {
        this.awsomeService.setAWsomeList(data);
        this.refreshAwsomeList();
      });
    // }
  }

  refreshAwsomeList() {
    this.awsomeList = this.awsomeService.getCurrentAwsomeList();
  }


  goToEditBlog(item: Awsome) {
    this.dataTransferService.setData(item);
    this.router.navigateByUrl('awsome/editAwsome');
  }
}
