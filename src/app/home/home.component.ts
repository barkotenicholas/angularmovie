import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { APIResponse, Game } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sort!: string;
  public games!:Array<Game>;
  constructor(private httpService:HttpService,private activateddRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateddRoute.params.subscribe((params:Params)=>{
      if(params['search-games']){
        this.searchGames('metacrit',params['game-search'])
      }
      else{
        this.searchGames('metacrit');
      }
    });

  }

  searchGames(sort:string, search?:string):void{
    this.httpService.getGameList(sort,search).subscribe((gameList:APIResponse<Game>)=>{
      this.games=gameList.results;
        console.log(gameList)
    });
  }
}
