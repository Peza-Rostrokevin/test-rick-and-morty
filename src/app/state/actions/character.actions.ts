import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';

export const retrievedCharacterList = createAction(
  '[Charactes List/API] Retrieve Characters Success',
  props<{ characters: ReadonlyArray<Character> }>()
);

export const retrievedCharacterListFilter = createAction(
  '[Charactes List/Filter] Retrieve Characters With Filter Success',
  props<{ characters: ReadonlyArray<Character> }>()
);
