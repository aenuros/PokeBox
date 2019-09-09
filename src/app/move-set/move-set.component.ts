import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-set',
  templateUrl: './move-set.component.html',
  styleUrls: ['./move-set.component.scss']
})
export class MoveSetComponent implements OnInit {
  @Input() public setPokemon: string;
  @Input() public setMoves: Array<string>;
  originalMoves = this.setMoves;
  currentMove1 = 'na';
  currentMove2 = 'na';
  currentMove3 = 'na';
  currentMove4 = 'na';

  constructor() { }

  ngOnInit() {
  }

  movesetChange(selectedMove, other) {
    console.log('move change');
    console.log(selectedMove);
    console.log(other);
    if (other === '1' ) {
      this.currentMove1 = other;
    }
    console.log(this.currentMove1);


    // this.setMoves = [selectedMove];

    // returnAList()
  }

  returnAList(boxId) {
    if (boxId !== 1 && this.currentMove1 !== 'na') {
      console.log('wire tripped');
      return this.setMoves = this.setMoves.filter(move => move.length < 7);
    } else {
      return this.setMoves;
    }
  }

}
