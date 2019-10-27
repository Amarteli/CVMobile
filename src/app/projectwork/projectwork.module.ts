import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectworkPage } from './projectwork.page';
/* Ari Martelius, 1800582 */
const routes: Routes = [
  {
    path: '',
    component: ProjectworkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectworkPage]
})
export class ProjectworkPageModule {}
