// import { Component, OnInit } from '@angular/core';
// import { Users } from '../users';
// import { GithubUsersServiceService } from '../github-users-service.service';
// import { Repositories } from '../repositories';

// @Component({
//   selector: 'app-repository-result',
//   templateUrl: './repository-result.component.html',
//   styleUrls: ['./repository-result.component.css']
// })
// export class RepositoryResultComponent implements OnInit {
//   user:Users;
//   repositories:Repositories;
//   repositoryData = [];
//   githubSearchService: GithubUsersServiceService;

//   constructor( githubSearchService: GithubUsersServiceService) {
//     this.githubSearchService = githubSearchService;
//    }

//   ngOnInit(){
//     //getting response property as results from the service and equating it to user
//     this.user = this. githubSearchService.user;

//     //getting items property result from the service and equating it to the repository data array
//     this.repositoryData = this.githubSearchService.repositoryData
//   }

// }
