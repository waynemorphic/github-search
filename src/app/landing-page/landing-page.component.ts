import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users'; //imported class Users
import { Repositories } from '../repositories'; //imported class repositories

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  newUsers = new Users ("", 0, 0, 0, new Date(), new Date())//constructing newUsers based on the Users class

  newRepositories = new Repositories ("","", 0, 0) //constructing the repositories based on Repositories class

  @Output() addUser = new EventEmitter<Users>(); //we want to emit the event clicked from parent for searching a user

  @Output() addRepository = new EventEmitter<Repositories>(); //emitting the repositories from the parent for searching the repo

  //defining method for searching a username once search button is clicked
  searchUsername(){
    this.addUser.emit(this.newUsers);
  }

  //defining method for searching a repository once the search button is clicked
  searchRepo(){
    this.addRepository.emit(this.newRepositories);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
