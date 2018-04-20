import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  AboutComponent,
  PortfolioComponent,
  ItemComponent,
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});