import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPagePage } from './root-page.page';

const routes: Routes = [
  {
    path: '',
    component: RootPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPagePageRoutingModule {}
