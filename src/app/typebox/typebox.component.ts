import { Component, OnInit } from '@angular/core';
import { Typechart } from '../pokebox/models/pokebox.interface';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-typebox',
  template: `
  <div id="box">
  SELECT
  <select #typeselect>
    <option value="fire">fire</option>
    <option value="water">water</option>
  </select>
  <br/>
  <button
    (click)="onCheck(typeselect.value, results)">Check
  </button>
  <div id="results" #results>

  </div>
</div>
`
})
export class TypeboxComponent {
  constructor() { }
  onCheck(type, weaknessspace) {
    console.log(type);

    weaknessspace.innerHTML = type;
  }
}
