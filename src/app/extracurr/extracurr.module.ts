import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtracurrPage } from './extracurr.page';
/* Ari Martelius, 1800582 */
const routes: Routes = [
  {
    path: '',
    component: ExtracurrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtracurrPage]
})
export class ExtracurrPageModule {}
