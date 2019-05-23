import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { TypeCalcService } from './../type-calc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-move-select',
  templateUrl: './move-select.component.html',
  styleUrls: ['./move-select.component.scss']
})
export class MoveSelectComponent implements OnInit {

  @Input() public movePokemon: string;
  @Input() public currentPokemon;

  moveDamageClass: string;
  moveType: string;
  moveList;

  constructor(private apiService: ApiService) { }

  onMoveCheck(move) {
    console.log(move);
    if (move === 'move_na' ) {
      console.log('no move');
      this.moveDamageClass = '';
      this.moveType = '';
    } else {
      this.apiService.getDamageClassOfMove(move).subscribe((data: Observable<any>) => {
          this.moveDamageClass = data['damage_class']['name'];
          this.moveType = data['type']['name'];
          console.log(this.currentPokemon['moves']);
        }
      );
    }
  }

  ngOnInit() {
  }

}
