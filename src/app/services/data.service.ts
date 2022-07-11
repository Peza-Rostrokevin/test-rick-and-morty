import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { retrievedCharacterList, retrievedCharacterListFilter } from '../state/actions/character.actions';
import { retrievedLocationList, retrievedLocationListFilter } from '../state/actions/location.actions';
import { retrievedEpisodeList, retrievedEpisodeListFilter } from '../state/actions/episode.actions';
import { Character } from '../models/character.interface';
import { Location } from '../models/location.interface';
import { Episode } from '../models/espisode.interface';

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
   getCharacterFilter(name: string){
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.store.dispatch(retrievedCharacterListFilter({characters: data.results.filter( (c: Character) => c.name.toLowerCase().includes(name))}))
    })
   }
   getLocationFilter(name: string){
    this.http.get('https://rickandmortyapi.com/api/location').subscribe((data: any) => {
      this.store.dispatch(retrievedLocationListFilter({locations: data.results.filter( (l: Location) => l.name.toLowerCase().includes(name))}))
    })
   }
   getEpisodeFilter(name: string){
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((data: any) => {
      this.store.dispatch(retrievedEpisodeListFilter({episodes: data.results.filter( (e: Episode) => e.name.toLowerCase().includes(name))}))
    })
   }
}
