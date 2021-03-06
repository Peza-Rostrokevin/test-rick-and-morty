import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';
import { retrievedCharacterList, retrievedCharacterListFilter } from '../actions/character.actions'

export const initialState: ReadonlyArray<Character> = [];

export const characterReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (oldState, { characters }) => {
    return [...oldState, ...characters]
  }),
  on(retrievedCharacterListFilter, (oldState, { characters }) => {
    return [...characters]
  })
);
