import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //imported forms module to manipulate the NgModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubUsersSearchComponent } from './github-users-search/github-users-search.component';
import { GithubRepositoriesSearchComponent } from './github-repositories-search/github-repositories-search.component';
import { GithubUsersServiceService } from './github-users-service.service';
import { UserResultComponent } from './user-result/user-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GithubUsersSearchComponent,
    GithubRepositoriesSearchComponent,
    UserResultComponent,
    
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
