import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Users } from './users';
import { Repositories } from './repositories';
import { LandingPageComponent } from './landing-page/landing-page.component'; //landing page with the search bar
import { SearchResultsComponent } from './search-results/search-results.component';//add a my profile component to route
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: 'results', component: SearchResultsComponent }, //results link displays the results of the search from the component
  { path: 'profile', component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//router-outlet is the property binding selector
