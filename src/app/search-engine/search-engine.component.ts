import { Component, OnInit } from '@angular/core';
import { Engine } from '../engine'; //imported engine blueprint class

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {
  
  //engine property with empty Engine class array
  engine!:Engine[];

  constructor() { }

  ngOnInit(): void {
  }

}
