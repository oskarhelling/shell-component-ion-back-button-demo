import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPage } from './list.page';
const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'detail-page',
    loadChildren: () => import('../../feature-b/feature-b.module').then( m => m.FeatureBModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPagePageRoutingModule {}
