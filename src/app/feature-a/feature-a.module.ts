import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FeatureAPage } from './feature-a.page';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAShellComponent } from './feature-a-shell.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureARoutingModule
  ],
  declarations: [ FeatureAPage, FeatureAShellComponent ]
})
export class FeatureAPageModule {}
