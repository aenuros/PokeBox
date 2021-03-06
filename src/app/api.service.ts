import { Typechart } from './pokebox/models/pokebox.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

const TYPECHART_API = environment.apiUrl + '/typeWeaknessList/';

const POKEMONLIST_API = environment.apiUrl + '/pokemonList/';


const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKEAPI_GENERIC_URL = 'https://pokeapi.co/api/v2/';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  public getAllTypes() {
    // get the whole darn thing
    return this.http.get(TYPECHART_API)
    .pipe(map((response: Response) => response.json()));
  }

  getTypes(type: string): Observable<any> {
    return this.http.get(TYPECHART_API + type)
    .pipe(map((response: Response) => response.json()));
  }


  getBulbasaur(): Observable<any> {
    return this.http.get(POKEAPI_URL + 'bulbasaur')
    .pipe(map((response: Response) => response.json()));
  }

  getPokemon(pokemon: string): Observable<any> {
    return this.http.get(POKEAPI_URL + pokemon)
    .pipe(map((response: Response) => response.json()));
  }

  getAllPokemon() {
    return this.http.get(POKEMONLIST_API)
    .pipe(map((response: Response) => response.json()));
  }

  getDamageClassOfMove(move: string): Observable<any> {
    return this.http.get(`${POKEAPI_GENERIC_URL}move/${move}`)
    .pipe(map((response: Response) => response.json()));
  }

  getPokemonsMoves(pokemon: string): Observable<any> {
    return this.http.get(POKEAPI_URL + pokemon)
    .pipe(map((response: Response) => response.json()));
  }

}
