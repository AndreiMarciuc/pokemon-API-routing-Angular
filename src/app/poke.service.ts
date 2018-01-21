import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PokeService {
  pokemon:Array<any>
  constructor(private _http: Http) {
    this.pokemon=[];
   }
   getAllCurrent(){
     return this.pokemon;
   }

  getPoke(cb){
    var rand =Math.floor(Math.random()*151)+1;
    this._http.get(`https://pokeapi.co/api/v2/pokemon/${rand}`).subscribe((res)=>{
    
    this.pokemon.push(res.json());
    cb();
    });
    
  }
}
