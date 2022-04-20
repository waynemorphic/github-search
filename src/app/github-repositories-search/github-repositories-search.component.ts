// import { Component, OnInit,Input } from '@angular/core';
// import { Repositories } from '../repositories';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { GithubUsersServiceService } from '../github-users-service.service';
// import { Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root' //means service can be used anywhere in the application
// })

// @Component({
//   selector: 'app-github-repositories-search',
//   templateUrl: './github-repositories-search.component.html',
//   styleUrls: ['./github-repositories-search.component.css']
// })
// export class GithubRepositoriesSearchComponent implements OnInit {
//   @Input() getRepository:string;

//   user!:any
//   repositories:Repositories; //property repositories of type Repositories
//   repositoryData:any=[]
//   newRepositoryData=[];

//   constructor(private http:HttpClient, private githubRepoService: GithubUsersServiceService) {
//     this.repositories = githubRepoService.searchRepo("")
//    }
//    searchRepo(getRepository){}
  
//   //  searchRepo(getRepository:string){
//   //    this.repositoryData.length = 0; //initializes to empty form on reload 

//   //    interface repositoryResponse {
//   //      total_count:number,
//   //      login:string,
//   //      name: string,
//   //      description:string,
//   //      forks_count: number,
//   //      stargazers_count: number,
//   //      created_at: Date,
//   //      updated_at: Date
//   //    }
//   //    this.http.get<repositoryResponse>(environment.APIurl + '/search/' + 'repositories?q='+ repository).subscribe(
//   //       items=>{

//   //           //repositories property is holding the data of the new Repositories blueprint class
//   //           this.repositoryData = new Repositories(
//   //               items.total_count,
//   //               items.login,
//   //               items.name,
//   //               items.description,
//   //               items.forks_count,
//   //               items.stargazers_count,
//   //               items.created_at,
//   //               items.updated_at
//   //           )
//   //           this.repositoryData.push(this.newRepositoryData)
//   //           console.log(items.total_count)
//   //           console.log(getRepository)
//   //          //alert(repository)
            
      
//     //  })
//     // }  
//     ngOnInit() {
//       // this.repositories = this.githubRepoService.repositories;

//       this.githubRepoService.searchRepo(this.getRepository) 
    
//     }

//     // Code with Brian
//     // searchRepo(username:string) {
//     //   this.githubUserService.searchUser(username).subscribe(user => this.user = user)
//     // }
// }
 
 

