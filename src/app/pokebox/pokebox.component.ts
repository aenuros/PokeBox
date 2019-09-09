import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Typechart } from './models/pokebox.interface';
import { ApiService } from './../api.service';
import { TypeCalcService } from './../type-calc.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-pokebox',
  styleUrls: ['./pokebox.component.scss'],
  templateUrl: './pokebox.component.html'
})
export class PokeboxComponent implements OnInit {
  @Input() public boxId;
  typecharts: Observable<any>;
  typecharts2: Observable<any>;
  title = 'pktype';
  data: Typechart[];
  myPokemon: Observable<any>;
  firstType: string;
  secondType: string;
  typeArray: any[];
  pokemonList: Observable<any>;
  moveList: Array<string>;

  constructor(private apiService: ApiService, private typeCalcService: TypeCalcService) {}

  @Input() pokemonName: string;


  onCheck(pokemon) {
    this.pokemonName = pokemon;
    if (pokemon === 'na') {
      this.firstType = undefined;
      this.secondType = undefined;
      this.printType(this.firstType, this.secondType);
      // TODO - send observable here that clears the types
      switch (this.boxId) {
        case '1':
          this.typeCalcService.subject1.next(['']);
          break;
        case '2':
          this.typeCalcService.subject2.next(['']);
          break;
        case '3':
          this.typeCalcService.subject3.next(['']);
          break;
        case '4':
          this.typeCalcService.subject4.next(['']);
          break;
        case '5':
          this.typeCalcService.subject5.next(['']);
          break;
        case '6':
          this.typeCalcService.subject6.next(['']);
          break;
        }
    } else {
        this.apiService
      .getPokemon(pokemon)
      .subscribe((data: Observable<any>) => {
        this.myPokemon = data;
        this.secondType = this.myPokemon['types'][0]['type']['name'];

        // if pokemon has two types, assign both. otherwise give dummy type 'na' to secondType
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
  }

  printType(firstType, secondType) {
    if (firstType === undefined) {
      this.typeArray = [];
    } else {
      this.typeArray = [];
      this.apiService
      .getTypes(firstType)
      .subscribe((data: Observable<any>) => {
        this.typecharts = data;
        // clear, and then populate moveList
        this.moveList = this.getTheMoves(this.myPokemon['moves']);
        console.log(this.moveList);
        // if there is only one type, calculate weaknesses and push to typearray
        if (secondType === 'na') {
          for (const key in this.typecharts) {
            // pokemon with only one type
            if ('na' && key !== 'id' && this.typecharts[key] >= 2) {
              // console.log(key + ': ' + this.typecharts[key]);
              this.typeArray.push(key + ': ' + this.typecharts[key] + 'x');
              switch (this.boxId) {
                case '1':
                  this.typeCalcService.subject1.next(this.typeArray);
                  break;
                case '2':
                  this.typeCalcService.subject2.next(this.typeArray);
                  break;
                case '3':
                  this.typeCalcService.subject3.next(this.typeArray);
                  break;
                case '4':
                  this.typeCalcService.subject4.next(this.typeArray);
                  break;
                case '5':
                  this.typeCalcService.subject5.next(this.typeArray);
                  break;
                case '6':
                  this.typeCalcService.subject6.next(this.typeArray);
                  break;
                }
            }
          }
        } else if (secondType !== 'na') {
          // we only call the api on the second type chart if there is a second type
          this.apiService.getTypes(secondType)
          .subscribe((data2: Observable<any>) => {
          this.typecharts2 = data2;

          for (const weakness in this.typecharts) {
            if (firstType === secondType) {
              if (this.typecharts[weakness] >= 2) {
              // console.log(weakness + ' : ' + (this.typecharts[weakness]) + 'x');
              this.typeArray.push(weakness + ' : ' + (this.typecharts[weakness]) + 'x');
              switch (this.boxId) {
                case '1':
                  this.typeCalcService.subject1.next(this.typeArray);
                  break;
                case '2':
                  this.typeCalcService.subject2.next(this.typeArray);
                  break;
                case '3':
                  this.typeCalcService.subject3.next(this.typeArray);
                  break;
                case '4':
                  this.typeCalcService.subject4.next(this.typeArray);
                  break;
                case '5':
                  this.typeCalcService.subject5.next(this.typeArray);
                  break;
                case '6':
                  this.typeCalcService.subject6.next(this.typeArray);
                  break;
                }
              }
            } else if ((this.typecharts[weakness] * this.typecharts2[weakness]) >= 2) {
              // console.log(weakness + ': ' + (this.typecharts[weakness] * this.typecharts2[weakness]) + 'x');
              this.typeArray.push(weakness + ': ' + (this.typecharts[weakness] * this.typecharts2[weakness]) + 'x');
              switch (this.boxId) {
                case '1':
                  this.typeCalcService.subject1.next(this.typeArray);
                  break;
                case '2':
                  this.typeCalcService.subject2.next(this.typeArray);
                  break;
                case '3':
                  this.typeCalcService.subject3.next(this.typeArray);
                  break;
                case '4':
                  this.typeCalcService.subject4.next(this.typeArray);
                  break;
                case '5':
                  this.typeCalcService.subject5.next(this.typeArray);
                  break;
                case '6':
                  this.typeCalcService.subject6.next(this.typeArray);
                  break;
                }
            }
          }

          });
        }
      });
    }
    this.typeCalcService.sendAlert('done');
  }

getTheMoves(array) {
  const tempMoveList = [];
  for (let i = 0; i < array.length; i++) {
    tempMoveList.push(array[i]['move']['name']);
  }
  return tempMoveList;
}


    ngOnInit() {
      this.apiService.getAllPokemon().subscribe((data: Observable<any>) => {
        this.pokemonList = data;
      });
    }
}
