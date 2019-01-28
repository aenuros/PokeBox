import { Component, OnInit, ɵConsole } from '@angular/core';
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
  Type 1: {{firstType}} <br/>
  Type 2: {{secondType}}
  </div>

  <div *ngIf="myPokemon && myPokemon['types'].length !== undefined && myPokemon['types'].length === 1">
  Type 1: {{firstType}}
  </div>



  <div *ngFor="let miniarray of typeArray">
   {{miniarray}} <br/>
  </div>

</div>
`
})
export class PokeboxComponent implements OnInit {
  typecharts: Observable<any>;
  typecharts2: Observable<any>;
  title = 'pktype';
  data: Typechart[];
  myBulbasaur: Observable<any>;
  myPokemon: Observable<any>;
  firstType: string;
  secondType: string;
  typeResult: string;
  typeArray: any[];

  constructor(private apiService: ApiService) {}

  onCheck(pokemon, weaknessspace) {
    console.log(pokemon);
    this.apiService
    .getPokemon(pokemon)
    .subscribe((data: Observable<any>) => {
      this.myPokemon = data;
      // console.log(this.myPokemon);
      // console.log(this.myPokemon['types'][0]['type']['name']);
      this.secondType = this.myPokemon['types'][0]['type']['name'];


      if (this.myPokemon['types'].length === 2) {
        this.firstType = this.myPokemon['types'][1]['type']['name'];
        this.secondType = this.myPokemon['types'][0]['type']['name'];
      } else {
        this.firstType = this.myPokemon['types'][0]['type']['name'];
        this.secondType = 'na';
    }
      // call types api and calculate type multiplier
      this.printType(this.firstType, this.secondType);
    });
  }

  printType(firstType, secondType) {
    this.typeResult = '';
    this.typeArray = [];
    this.apiService
    .getTypes(firstType)
    .subscribe((data: Observable<any>) => {
      this.typecharts = data;
      // console.log(this.typecharts);
      if (secondType === 'na') {
        for (const key in this.typecharts) {
          // pokemon with only one type
          if ('na' && key !== 'id' && this.typecharts[key] >= 2) {
            console.log(key + ': ' + this.typecharts[key]);
            // this.typeResult += key + ': ' + this.typecharts[key] + 'x';
            this.typeArray.push(key + ': ' + this.typecharts[key] + 'x');
          }
        }
      } else if (secondType !== 'na') {
        // we only call the api on the second type chart if there is a second type
        this.apiService.getTypes(secondType)
        .subscribe((data2: Observable<any>) => {
        this.typecharts2 = data2;
        // console.log('ITS HERE');
        // console.log(this.typecharts2);
        // console.log(this.typecharts);

        for (const weakness in this.typecharts) {
          if (firstType === secondType) {
            if (this.typecharts[weakness] >= 2) {
            console.log(weakness + ' : ' + (this.typecharts[weakness]) + 'x');
            // this.typeResult += weakness + ' : ' + (this.typecharts[weakness]) + 'x';
            this.typeArray.push(weakness + ' : ' + (this.typecharts[weakness]) + 'x');
            }
          } else if ((this.typecharts[weakness] * this.typecharts2[weakness]) >= 2) {
            console.log(weakness + ': ' + (this.typecharts[weakness] * this.typecharts2[weakness]) + 'x');
            // this.typeResult += weakness + ': ' + (this.typecharts[weakness] * this.typecharts2[weakness]) + 'x';
            this.typeArray.push(weakness + ': ' + (this.typecharts[weakness] * this.typecharts2[weakness]) + 'x');
          }
        }

        });
      }
    });
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
