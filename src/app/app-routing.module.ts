import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AwsomeModule} from './awsome/awsome.module';

const routes: Routes = [
  {
    path: 'awsome',
    loadChildren: './awsome/awsome.module#AwsomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {
}
