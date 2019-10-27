import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TargetcvPage } from './targetcv.page';
/* Ari Martelius, 1800582 */
const routes: Routes = [
  {
    path: '',
    component: TargetcvPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TargetcvPage]
})
export class TargetcvPageModule {}
