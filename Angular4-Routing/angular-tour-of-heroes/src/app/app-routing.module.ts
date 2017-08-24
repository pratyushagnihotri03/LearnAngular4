/**
 * New typescript file
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];
/*
 * The forRoot() method is called because a configured router is provided at the app's root.
 * The forRoot() method supplies the Router service providers and directives needed for routing,
 * and performs the initial navigation based on the current browser URL.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
