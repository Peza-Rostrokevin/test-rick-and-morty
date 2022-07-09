import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';
import { retrievedCharacterList } from '../actions/character.actions'

export const initialState: ReadonlyArray<Character> = [];

export const characterReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (oldState, { characters }) => {
    return [...oldState, ...characters]
  })/* ,
  on(retrievedCharacterListFilter, (oldState, { name }) => {
    return [...oldState.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))]
  }) */
);
