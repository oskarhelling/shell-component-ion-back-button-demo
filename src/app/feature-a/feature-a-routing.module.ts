import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAShellComponent } from './feature-a-shell.component';
import { FeatureAPage as FeatureAPage } from './feature-a.page';

const routes: Routes = [
  { path: '',
    component: FeatureAShellComponent,
    children: [
      { path: '', component: FeatureAPage },
      { path: 'list-page', loadChildren: () => import('./list/list.module').then( m => m.ListPagePageModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule {}
