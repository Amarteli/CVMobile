import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactinfoPage } from './contactinfo.page';
/* Ari Martelius, 1800582 */
const routes: Routes = [
  {
    path: '',
    component: ContactinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactinfoPage]
})
export class ContactinfoPageModule {}
