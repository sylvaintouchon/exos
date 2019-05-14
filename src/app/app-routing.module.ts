import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'bouts-de-code', loadChildren: './bouts-de-code/bouts-de-code.module#BoutsDeCodePageModule' },
  { path: 'tableaux', loadChildren: './tableaux/tableaux.module#TableauxPageModule' },
  { path: 'ngmodel', loadChildren: './ngmodel/ngmodel.module#NgmodelPageModule' },
  { path: 'clic', loadChildren: './clic/clic.module#ClicPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
