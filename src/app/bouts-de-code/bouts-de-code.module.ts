import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BoutsDeCodePage } from './bouts-de-code.page';

const routes: Routes = [
  {
    path: '',
    component: BoutsDeCodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BoutsDeCodePage]
})
export class BoutsDeCodePageModule {}
