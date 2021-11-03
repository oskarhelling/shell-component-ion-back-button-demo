import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootPagePageRoutingModule } from './root-page-routing.module';

import { RootPagePage } from './root-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootPagePageRoutingModule
  ],
  declarations: [RootPagePage]
})
export class RootPagePageModule {}
