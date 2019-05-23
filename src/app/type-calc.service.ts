import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypeCalcService {

  subject1 = new BehaviorSubject([]);
  subject2 = new BehaviorSubject([]);
  subject3 = new BehaviorSubject([]);
  subject4 = new BehaviorSubject([]);
  subject5 = new BehaviorSubject([]);
  subject6 = new BehaviorSubject([]);

  alert = new BehaviorSubject('nothing');

  fullSubject = this.subject1.pipe(merge(this.subject2, this.subject3, this.subject4, this.subject5, this.subject6));


  constructor() { }

  sendAlert(message: string) {
    this.alert.next(message);
  }

}
