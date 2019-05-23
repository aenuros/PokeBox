import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeboxComponent } from './typebox/typebox.component';
import { PokeboxComponent } from './pokebox/pokebox.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { TeamWeaknessAnalyzerComponent } from './team-weakness-analyzer/team-weakness-analyzer.component';
import { MoveSelectComponent } from './move-select/move-select.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeboxComponent,
    TypeboxComponent,
    TeamWeaknessAnalyzerComponent,
    MoveSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
