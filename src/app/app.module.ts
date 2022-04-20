import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //imported forms module to manipulate the NgModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { GithubRepositoriesSearchComponent } from './github-repositories-search/github-repositories-search.component';
import { GithubUsersServiceService } from './github-users-service.service';
import { UserResultComponent } from './user-result/user-result.component';
//import { RepositoryResultComponent } from './repository-result/repository-result.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CountingDatesPipe } from './counting-dates.pipe';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    // GithubRepositoriesSearchComponent,
    UserResultComponent,
    //RepositoryResultComponent,
    SearchResultsComponent,
    MyProfileComponent,
    CountingDatesPipe,
    DateFormatPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubUsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
