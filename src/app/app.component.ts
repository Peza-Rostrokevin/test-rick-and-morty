import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Character } from 'src/app/models/character.interface';
import { FormControl } from '@angular/forms';
import { Location } from './models/location.interface';
import { Episode } from './models/espisode.interface';
import { filter, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCharacters } from './state/selectors/characters.selector';
import { selectLocations } from './state/selectors/locations.selector';
import { selectEpisodes } from './state/selectors/episodes.selector';
import { retrievedCharacterListFilter } from './state/actions/character.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-rick-and-morty';
  characters$: Observable<any> = new Observable();
  locations$: Observable<readonly Location[]>;
  episodes$: Observable<readonly Episode[]>;
  displayedItems = 'Characters';
  searchForm = new FormControl('');
  contents: string[] = ['Characters', 'Locations', 'Episodes'];

  constructor(private dataServ: DataService, private store: Store){
    this.dataServ.init();
    this.characters$ = this.store.select(selectCharacters);
    this.locations$ = this.store.select(selectLocations);
    this.episodes$ = this.store.select(selectEpisodes)
    this.searchForm.valueChanges.subscribe(data => {
      this.search(data);
    })
  }

  search(name: any | string){
    switch(this.displayedItems){
      case this.contents[0]:
        /* this.store.dispatch(retrievedCharacterListFilter({name: name})); */
        this.store.select(selectCharacters).subscribe(data => {
          this.characters$ = of(data.filter( c => c.name.toLowerCase().includes(name.toLowerCase())))
        });
        break;
      case this.contents[1]:
        this.store.select(selectLocations).subscribe(data => {
          this.locations$ = of(data.filter( (l: Location) => l.name.toLowerCase().includes(name.toLowerCase())))
        });
        break;
      case this.contents[2]:
        this.store.select(selectEpisodes).subscribe(data => {
          this.episodes$ = of(data.filter( (e: Episode) => e.name.toLowerCase().includes(name.toLowerCase())))
        });
        break;
    }
  }

}
