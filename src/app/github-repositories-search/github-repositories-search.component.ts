import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root' //means service can be used anywhere in the application
})

@Component({
  selector: 'app-github-repositories-search',
  templateUrl: './github-repositories-search.component.html',
  styleUrls: ['./github-repositories-search.component.css']
})
export class GithubRepositoriesSearchComponent implements OnInit {

  repositories:Repositories; //property repositories of type Repositories
  repositoryData=[]

  constructor(private http:HttpClient) { }
  
   searchRepo(repository:string){
     this.repositoryData.length = 0; //initializes to empty form on reload 

     interface repositoryResponse {
       total_count:number,
       login:string,
       name: string,
       forks_count: number,
       stargazers_count: number,
       created_at: Date,
       updated_at: Date
     }
     this.http.get<repositoryResponse>(environment.APIurl + '/search/' + 'repositories?q='+ repository).subscribe(
        items=>{

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
            console.log(items.total_count)
            console.log(repository)
           //alert(repository)
            
      
     })
    }  
    ngOnInit(): void{}
}
 
 

