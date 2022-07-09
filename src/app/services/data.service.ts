import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { retrievedCharacterList } from '../state/actions/character.actions';
import { retrievedLocationList } from '../state/actions/location.actions';
import { retrievedEpisodeList } from '../state/actions/episode.actions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,  private store: Store) {
   }

   init() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => this.store.dispatch(retrievedCharacterList({characters: data.results})))
    this.http.get('https://rickandmortyapi.com/api/location').subscribe((data: any) => this.store.dispatch(retrievedLocationList({locations: data.results})))
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((data: any) => this.store.dispatch(retrievedEpisodeList({episodes: data.results})))
   }
}
