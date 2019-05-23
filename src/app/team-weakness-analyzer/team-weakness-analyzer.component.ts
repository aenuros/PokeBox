import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TypeCalcService } from './../type-calc.service';

@Component({
  selector: 'app-team-weakness-analyzer',
  templateUrl: './team-weakness-analyzer.component.html',
  styleUrls: ['./team-weakness-analyzer.component.scss']
})
export class TeamWeaknessAnalyzerComponent implements OnInit {

public totalTypeArray: Array<any> = [];
public uniqueTypeArray: Array<string> = [''];

bigboi = {
  'array1': [''],
  'array2': [''],
  'array3': [''],
  'array4': [''],
  'array5': [''],
  'array6': ['']
};


// testfam = this.getKeys(this.bigboi);

getKeys(object): Array<any> {
  const temp_array = [];
  Object.keys(object).map(function(key) {
    temp_array.push(object[key]);
  });
  return temp_array;
}

  constructor(private typeCalcService: TypeCalcService) {
    // this.typeCalcService.alert.subscribe(
    //   data => {console.log(data);
    //     console.log(this.bigboi);
    //     console.log('we have subscribed');
    //     this.getKeys(this.bigboi);
    //   }
    // );
    this.typeCalcService.subject1.subscribe(
      data => {
        this.bigboi['array1'] = data;
        console.log('number 1 has been updated');
      }
    );

    this.typeCalcService.subject2.subscribe(
      data => {
        this.bigboi['array2'] = data;
      }
    );
    this.typeCalcService.subject3.subscribe(
      data => {
        this.bigboi['array3'] = data;
      }
    );
    this.typeCalcService.subject4.subscribe(
            data => {
              this.bigboi['array4'] = data;
      }
    );
    this.typeCalcService.subject5.subscribe(
      data => {
        this.bigboi['array5'] = data;
      }
    );
    this.typeCalcService.subject6.subscribe(
      data => {
        this.bigboi['array6'] = data;
      }
    );
    this.typeCalcService.fullSubject.subscribe(
      data => {
        // get all types from the typeObject
        this.totalTypeArray = this.getKeys(this.bigboi);
        // empty uniqueTypeArray and then add as individual items to flatten the totalTypeArray dimensions
        this.uniqueTypeArray = [];
        for (let i = 0; i < this.totalTypeArray.length; i++) {
          for (let j = 0; j < this.totalTypeArray[i].length; j++) {
            this.uniqueTypeArray.push(this.totalTypeArray[i][j]);
          }
        }
        // sort for unique values here
        this.uniqueTypeArray = Array.from(new Set(this.uniqueTypeArray)).sort();
      }
    );
   }

  ngOnInit() {
  }

}
