import { createFeatureSelector } from '@ngrx/store';
import { Character } from 'src/app/models/character.interface';

export const selectCharacters = createFeatureSelector<ReadonlyArray<Character>>('characters');


