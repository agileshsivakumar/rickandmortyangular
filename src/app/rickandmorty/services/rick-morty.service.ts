import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  public getRickMorty() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }
}
