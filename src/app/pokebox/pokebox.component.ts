import { Component, OnInit } from '@angular/core';
import { Typechart } from './models/pokebox.interface';
import { Type } from '@angular/compiler';
import { ApiService } from './../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokebox',
  styleUrls: ['./pokebox.component.scss'],
  template: `
  <div id="box">
  SELECT
  <select #pokeselect>
    <option value="gastly">Gastly</option>
    <option value="magcargo">Magcargo</option>
    <option value="squirtle">squirtle</option>
  </select>
  <br/>
  <button
    (click)="onCheck(pokeselect.value, results)">Check
  </button>


  <div *ngIf="myPokemon && myPokemon['types'].length !== undefined && myPokemon['types'].length === 2">
  Type 1: {{firstType}}
  Type 2: {{secondType}}
  </div>

  <div *ngIf="myPokemon && myPokemon['types'].length !== undefined && myPokemon['types'].length === 1">
  Type 1: {{firstType}}
  </div>

</div>
`
})
export class PokeboxComponent implements OnInit {
  typecharts: Observable<any>;
  title = 'pktype';
  data: Typechart[];
  myBulbasaur: Observable<any>;
  myPokemon: Observable<any>;
  firstType: string;
  secondType: string;

  constructor(private apiService: ApiService) {}

  onCheck(pokemon, weaknessspace) {
    console.log(pokemon);
    this.apiService
    .getPokemon(pokemon)
    .subscribe((data: Observable<any>) => {
      this.myPokemon = data;
      console.log(this.myPokemon);
      // console.log(this.myPokemon['types'][0]['type']['name']);
      this.secondType = this.myPokemon['types'][0]['type']['name'];


      if (this.myPokemon['types'].length === 2) {
        this.firstType = this.myPokemon['types'][1]['type']['name'];
        this.secondType = this.myPokemon['types'][0]['type']['name'];
      } else {
        this.firstType = this.myPokemon['types'][0]['type']['name'];
        this.secondType = 'na';
    }

      this.printType(this.firstType);


    });
  }

  printType(defensiveType) {
    this.apiService
    .getTypes(defensiveType)
    .subscribe((data: Observable<any>) => {
      this.typecharts = data;
      for (const key in this.typecharts) {
        // pokemon with only one type
        if (this.secondType === 'na' && key !== 'id' && this.typecharts[key] >= 2) {
          console.log(key + ': ' + this.typecharts[key]);
        }
      }
    });
    return this.typecharts;
  }

    ngOnInit() {
      console.log('NG ON INIT baby');
      /*


      this.apiService
      .getBulbasaur()
      .subscribe((data: Observable<any>) => this.myBulbasaur = data);
      */
    }


}
