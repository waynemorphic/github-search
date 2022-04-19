import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users'; //imported class Users
import { Repositories } from '../repositories'; //imported class repositories
// import { GithubUsersServiceService } from '../github-users-service.service'; //imported our service
import { SearchGithub } from '../search-github';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {

  newUsers = new Users ("", 0, 0, 0, new Date(), new Date(),"")//constructing newUsers based on the Users class

  newRepositories = new Repositories (0,"","", 0, 0, new Date, new Date) //constructing the repositories based on Repositories class

  @Output() addUser = new EventEmitter<Users>(); //we want to emit the event clicked from parent for searching a user
  @Output() addRepository = new EventEmitter<Repositories>(); //emitting the repositories from the parent for searching the repo

  //defining method for searching a username once search button is clicked
  

  //defining method for searching a repository once the search button is clicked
  searchRepo(){
    this.addRepository.emit(this.newRepositories);
  }

  //we create a property users and assign it type Users. Then in the constructor, we use the getusers method declared
  // in the GithubUsers service 
  // users!:Users[];
  // user:any = []
  // repo:any = []

  searchGithub!:SearchGithub
  constructor(private http:HttpClient) { }

  ngOnInit(): void {}
    // this.usersServices.sendGetRequest().subscribe(data=>{
    //   this.user = data;
      
      
      // console.log(data)
      
    // interface ApiResponse{
    //   bio: string,
    //   name: string,
    //   followers: number,
    //   following: number,
    //   avatar: string
    // }
    // this.http.get<ApiResponse>("https://api.github.com/users" ).subscribe(data=>{
    //   this.searchGithub = new SearchGithub(
    //     data.bio = login,
    //     data.name,
    //     data.followers,
    //     data.following,
    //     data.avatar)
    //     console.log(data)
//     })
//   }
 }
