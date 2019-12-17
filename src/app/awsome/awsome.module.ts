import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsomeListComponent } from './awsome-list/awsome-list.component';
import { AwsomeNewComponent } from './awsome-new/awsome-new.component';
import { AwsomeEditComponent } from './awsome-edit/awsome-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {AwsomeService} from './awsome.service';
import {AwsomeRouting} from './awsome-routing';



@NgModule({
  declarations: [AwsomeListComponent, AwsomeNewComponent, AwsomeEditComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, NgxPaginationModule, AwsomeRouting
  ],
  providers: [AwsomeService]
})
export class AwsomeModule { }
