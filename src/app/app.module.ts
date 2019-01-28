import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeboxComponent } from './typebox/typebox.component';
import { PokeboxComponent } from './pokebox/pokebox.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PokeboxComponent,
    TypeboxComponent
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
