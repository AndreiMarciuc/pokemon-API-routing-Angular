import { Component, OnInit } from '@angular/core';
import { PokeService } from './../poke.service';
@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {
  pokemon: Array<any>
  constructor(private _pokeService: PokeService) { 
    this.pokemon = [];
    }
  getAllCurrent(){
    this.pokemon = this._pokeService.getAllCurrent();
  }
  getPoke(){
     this._pokeService.getPoke((data)=>{
       this.getAllCurrent();
     })
   }
  ngOnInit() {
  }

}
