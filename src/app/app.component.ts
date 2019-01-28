import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Typechart } from './pokebox/models/pokebox.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  typecharts: Typechart[];
  title = 'pktype';
  data: Typechart[];
  myBulbasaur: Observable<any>;

  constructor(private apiService: ApiService) {}
    ngOnInit() {
      console.log('NG ON INIT baby');
    }
}
