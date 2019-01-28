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
    <option value="bulbasaur">Bulbasaur</option>
    <option value="magcargo">Magcargo</option>
    <option value="squirtle">squirtle</option>
  </select>
  <br/>
  <button
    (click)="onCheck(pokeselect.value, results)">Check
  </button>
  <div *ngIf="myPokemon" id="results" #results>

  Type 1: {{myPokemon["types"][0]["type"]["name"]}}
  </div>

  <div *ngIf="myPokemon && myPokemon['types'].length !== undefined && myPokemon['types'].length === 2">
  Type 2: {{myPokemon["types"][1]["type"]["name"]}}

  </div>
</div>
`
})
export class PokeboxComponent implements OnInit {
  typecharts: Typechart[];
  title = 'pktype';
  data: Typechart[];
  myBulbasaur: Observable<any>;
  myPokemon: Observable<any>;

  constructor(private apiService: ApiService) {}

  onCheck(pokemon, weaknessspace) {
    console.log(pokemon);
    this.apiService
    .getPokemon(pokemon)
    .subscribe((data: Observable<any>) => this.myPokemon = data);
    console.log(this.myPokemon);
    console.log(this.myPokemon['types'][0]['type']['name']);
  }

    ngOnInit() {
      console.log('NG ON INIT baby');
      /*
      this.apiService
      .getTypes()
      .subscribe((data: Typechart[]) => this.typecharts = data);

      this.apiService
      .getBulbasaur()
      .subscribe((data: Observable<any>) => this.myBulbasaur = data);
      */
    }


}
