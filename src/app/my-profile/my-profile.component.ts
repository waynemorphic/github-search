import { Component, OnInit } from '@angular/core';
import { Users } from '../users'; //imported users class
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


  repositories:Repositories;
  user:Users;
  repositoryData:any = [];
  userData:any = [];
  

  constructor(private http:HttpClient) { 
    this.user = new Users("", "", 0, 0, 0, new Date(), new Date, "");
    this.repositories = new Repositories(0, "", "", "", 0, 0, new Date, new Date);
  }
  
  getInputData(){
    this.repositoryData.length = 0; //initialize array with zero elements
    

    interface searchResponse {
      login: string,
      name: string,
      followers: number,
      following: number,
      public_repos: number,
      created_at: Date,
      updated_at: Date,
      avatar_url: string,
 
    }
    
    this.http.get<searchResponse>('https://api.github.com/users/waynemorphic').subscribe(response=>{
      this.user.login = response.login;
      this.user.name = response.name;
      this.user.followers = response.followers;
      this.user.following = response.following;
      this.user.public_repos = response.public_repos;
      this.user.created_at = response.created_at;
      this.user.updated_at = response.updated_at;
      this.user.avatar_url = response.avatar_url;
      // this.repositories.description = response.description
    })
    
    this.http.get<any>('https://api.github.com/users/waynemorphic/repos').
    subscribe(items => {
      for (let i = 0; i < items.length; i++){
      this.userData = new Repositories(
        items[i].total_count,
        items[i].login,
        items[i].name,
        items[i].description,
        items[i].forks_count,
        items[i].stargazers_count,
        items[i].created_at,
        items[i].updated_at
      );
      this.repositoryData.push(this.userData);
      }
    console.table(this.userData)
    }
    
    )
    
  }

  ngOnInit(): void {
  }

}
