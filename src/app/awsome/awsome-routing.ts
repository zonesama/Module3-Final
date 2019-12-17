import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AwsomeListComponent} from './awsome-list/awsome-list.component';
import {AwsomeNewComponent} from './awsome-new/awsome-new.component';
import {AwsomeEditComponent} from './awsome-edit/awsome-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AwsomeListComponent
  },
  {
    path: 'newAwsome',
    component: AwsomeNewComponent
  },
  {
    path: 'editAwsome',
    component: AwsomeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AwsomeRouting {
}
