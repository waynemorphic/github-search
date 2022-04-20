// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit,Output } from '@angular/core';
// import { Users } from '../users';
// import { environment } from 'src/environments/environment';
// import { GithubUsersServiceService } from '../github-users-service.service';
// import { Repositories } from '../repositories';

// @Component({
//   selector: 'app-github-users-search',
//   templateUrl: './github-users-search.component.html',
//   styleUrls: ['./github-users-search.component.css'],
//   providers: [GithubUsersServiceService]
// })
// export class GithubUsersSearchComponent implements OnInit {

//   user: Users //property called user of type Users class
//   username: string
//   repositories:Repositories;
//   repositoryData:any = [];
//   userData:any = [];
//   newRepositoryData:any = []; 
//   newUserData:any = [];
//   serviceProperty:GithubUsersServiceService

//   //Receiving information from the github API 
//   // searchUser(username:string){
//   //   interface userResponse{
//   //     login: string,
//   //     followers: number,
//   //     following: number,
//   //     public_repos: number,
//   //     created_at: Date,
//   //     updated_at: Date,
//   //     avatar_url: string
//   //   }

//   //   this.http.get<userResponse>(environment.APIurl + '/users/' + username).subscribe(
//   //     data=>{
//   //       //creating a new instance of the blueprint class Users

//   //       //user is holding the data of the new instance
//   //       this.user = new Users(
//   //         data.login,
//   //         data.followers,
//   //         data.following,
//   //         data.public_repos,
//   //         data.created_at,
//   //         data.updated_at,
//   //         data.avatar_url
//   //     )
//   //     //alert(username)
//   //     }  
//   //   )
//   // }
//   // searchRepo(getRepository:string){
//   //      this.repositoryData.length = 0; //initializes to empty form on reload 
  
//   //      interface repositoryResponse {
//   //        total_count:number,
//   //        login:string,
//   //        name: string,
//   //        description:string,
//   //        forks_count: number,
//   //        stargazers_count: number,
//   //        created_at: Date,
//   //        updated_at: Date
//   //      }
//   //      this.http.get<repositoryResponse>(environment.APIurl + '/search/' + 'repositories?q='+ getRepository).subscribe(
//   //         items=>{
  
//   //             //repositories property is holding the data of the new Repositories blueprint class
//   //             this.repositoryData = new Repositories(
//   //                 items.total_count,
//   //                 items.login,
//   //                 items.name,
//   //                 items.description,
//   //                 items.forks_count,
//   //                 items.stargazers_count,
//   //                 items.created_at,
//   //                 items.updated_at
//   //             )
//   //             this.repositoryData.push(this.newRepositoryData)
//   //             console.log(items.total_count)
//   //             console.log(getRepository)
//   //            //alert(repository)
              
        
//   //      })
//   //     }  

//  //dependency injection of the service into the users component
//  searchUsers(){
//    this.serviceProperty:searchUser(this.username)
//  }
//   constructor( serviceProperty:GithubUsersServiceService, private http:HttpClient) {
//     this.serviceProperty = serviceProperty;
//     // this.repositories = serviceProperty.searchRepo("")
    
//    }

//   ngOnInit() {
//     this.user = this.serviceProperty.user;
//     // this.repositories = this.serviceProperty.repositories;
//   }

// }




