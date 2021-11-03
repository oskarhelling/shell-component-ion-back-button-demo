import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeatureBPage } from './feature-b.page';
import { FeatureBShellComponent } from './feature-b-shell.component';
import { FeatureBRoutingModule } from './feature-b-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureBRoutingModule
  ],
  declarations: [ FeatureBPage, FeatureBShellComponent ]
})
export class FeatureBModule {}
