// //this service is primarily for getting users from the API

import { Injectable } from '@angular/core';
import { Users } from './users'; //imported users class
import { Repositories } from './repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' //means service can be used anywhere in the application
})
export class GithubUsersServiceService {
    repositories:Repositories;
    user:Users;
    repositoryData:any = [];
    userData:any = [];
    newRepositoryData:any = []; //data from the repositoryData will be pushed to this empty array
    newUserdata:any = []

    constructor(private http:HttpClient) { }
    searchRepo(repository:string){
    this.repositoryData.length = 0; //initializes to empty form on reload 

     interface repositoryResponse {
       total_count: number,
       login:string,
       name: string,
       forks_count: number,
       stargazers_count: number,
       created_at: Date,
       updated_at: Date
     }
     this.http.get<repositoryResponse>(environment.APIurl + '/search/' + 'repositories?q='+ repository).subscribe(
        items=>{
          // for (let i = 0; i < response.length;i++){}

            //repositories property is holding the data of the new Repositories blueprint class
            this.repositories = new Repositories(
                items.total_count,
                items.login,
                items.name,
                items.forks_count,
                items.stargazers_count,
                items.created_at,
                items.updated_at
            )
            this.repositoryData.push(this.newRepositoryData) //we are pushing the data from the repositoryData into the newRepositoryData, empty array
           //alert(repository)

     })
     return this.newRepositoryData;
    } 
    
    
  //Receiving information from the github API 
  searchUser(username:string){
    this.userData.length = 0;

    interface userResponse{
      login: string,
      followers: number,
      following: number,
      public_repos: number,
      created_at: Date,
      updated_at: Date,
      avatar_url: string
    }

    this.http.get<userResponse>(environment.APIurl + '/users/' + username).subscribe(
      data=>{
        //creating a new instance of the blueprint class Users

        //user is holding the data of the new instance
        this.user = new Users(
          data.login,
          data.followers,
          data.following,
          data.public_repos,
          data.created_at,
          data.updated_at,
          data.avatar_url
      )
      this.userData.push(this.newUserdata)
      
      //alert(username)
      }
      
    )
    return this.newUserdata;

  }

    ngOnInit(): void{}
    
  
  }
  
//   user!:Users;
//   repository!:Repositories;
//   repositoryData = [];
//   userData:any = [];

//   constructor(private http: HttpClient) {
//     this.user = new Users("", 0, 0, 0, new Date(), new Date(),"");
//     this.repository = new Repositories("", "", 0, 0, new Date(), new Date());
//   }
//   sendGetRequest(username:string){
//     this.repositoryData.length = 0;

//     interface UserResponse{
//       login:string,
//       followers: number,
//       following: number,
//       publicRepos: number,
//       createdAt: Date,
//       updatedAt: Date,
//       avatar: string  
//   }

//   let promise = new Promise((resolve, reject)=>{
//     this.http.get<UserResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
      
//       this.user.login=response!.login;
//       this.user.followers=response!.followers;
//       this.user.following=response!.following;
//       this.user.public_repos=response!.publicRepos;
//       this.user.created_at=response!.createdAt;
//       this.user.updated_at=response!.updatedAt;
//       this.user.avatar_url=response!.avatar;
//       resolve("");

//   }),
//   error=>{
//     reject(error)
//   }
//   return promise
//   })
// }
// }
// //   this.http.get("https://api.github.com/users/" ).toPromise().then(response=>{
// //   for(let i = 0; i < response.length; i++)
// //   {
// //     this.userData = new Repositories(
// //       response[i].name,
// //       response[i].repo,
// //       response[i].forks,
// //       response[i].star,
// //     )
// //     this.repositoryData.push(this.userData);
// //   }
// //   resolve("")
// // },
// // error=>{
// //   reject(error)
// // }

// //   }
// //   return promise
// // }
  
// //   }
  
//     // this.user = new Users("", 0, 0, 0, new Date, new Date);
//     // this.repository = new Repositories("", "", 0, 0);
   
//   //  getUsersData(username:string){
//   //    interface ApiResponse{
//   //      login:string,
//   //      followers: number,
//   //      following: number,
//   //      publicRepos: number,
//   //      createdAt: number,
//   //      updatedAt: number

//   //    }
//   //  }
   
// //   }

