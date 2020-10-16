import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletingPage } from './deleting.page';

const routes: Routes = [
  {
    path: '',
    component: DeletingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletingPageRoutingModule {}
