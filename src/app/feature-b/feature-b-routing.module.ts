import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureBPage } from './feature-b.page';
import { FeatureBShellComponent } from './feature-b-shell.component';

const routes: Routes = [
  { path: '',
    component: FeatureBShellComponent,
    children: [
      { path: '', component: FeatureBPage }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureBRoutingModule {}
