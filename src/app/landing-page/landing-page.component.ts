import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users'; //imported class Users
import { Repositories } from '../repositories'; //imported class repositories
import { GithubUsersServiceService } from '../github-users-service.service'; //imported our service
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {

  user:Users;
  username: string;
  githubSearchService: GithubUsersServiceService;
  waynemorphic;

  searchGithub(){
    this.githubSearchService.getInputData(this.username);
  }
  getProfile(){
    this.githubSearchService.getInputData(this.waynemorphic)
  }

  constructor(githubSearchService:GithubUsersServiceService) { 
    this.githubSearchService = githubSearchService;
  }
  

  ngOnInit(): void {}
    
 }
