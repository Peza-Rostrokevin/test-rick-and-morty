import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Character } from 'src/app/models/character.interface';
import { DataService } from 'src/app/services/data.service';
import { selectCharacters } from 'src/app/state/selectors/characters.selector';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters$!: Observable<Character[]>;
  cant = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { charactersList: Array<string>, typeName: string }, private store: Store) {
    this.store.select(selectCharacters).subscribe(characterEl => {
      const characterFound: Character[] = [];
      characterEl.forEach((cl: Character) => {
        if(this.data.charactersList.find(dcl => dcl === cl.url)){
          characterFound.push(cl);
        }
      })
      this.cant = characterFound.length;
      this.characters$ = of(characterFound);
    });
   }

  ngOnInit(): void {

  }

}
