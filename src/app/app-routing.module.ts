import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-a',
    loadChildren: () => import('./feature-a/feature-a.module').then( m => m.FeatureAPageModule)
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./feature-b/feature-b.module').then( m => m.FeatureBModule)
  },
  {
    path: 'root-page',
    loadChildren: () => import('./root-page/root-page.module').then( m => m.RootPagePageModule)
  },
  {
    path: '',
    redirectTo: 'root-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
