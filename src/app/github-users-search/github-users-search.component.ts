import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { environment } from 'src/environments/environment';
import { GithubUsersServiceService } from '../github-users-service.service';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-github-users-search',
  templateUrl: './github-users-search.component.html',
  styleUrls: ['./github-users-search.component.css'],
  providers: [GithubUsersServiceService]
})
export class GithubUsersSearchComponent implements OnInit {

  user: Users //property called user of type Users class
  repositories:Repositories;
  repositoryData:any = [];
  userData:any = [];
  newRepositoryData:any = []; 
  newUserData:any = [];

  //Receiving information from the github API 
  searchUser(username:string){
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
      //alert(username)
      }
      
    )

  }

 //dependency injection of the service into the users component
  constructor(private serviceProperty:GithubUsersServiceService, private http:HttpClient) {
    this.user = serviceProperty.searchUser("");
    this.repositories = serviceProperty.searchRepo("")
    
   }

  ngOnInit() {
    this.user = this.serviceProperty.user;
    this.repositories = this.serviceProperty.repositories;
  }

}




