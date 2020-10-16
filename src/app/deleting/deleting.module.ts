import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletingPageRoutingModule } from './deleting-routing.module';

import { DeletingPage } from './deleting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletingPageRoutingModule
  ],
  declarations: [DeletingPage]
})
export class DeletingPageModule {}
