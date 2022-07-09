import { createReducer, on } from '@ngrx/store';
import { Location } from 'src/app/models/location.interface';
import { retrievedLocationList } from '../actions/location.actions'

export const initialState: ReadonlyArray<Location> = [];

export const locationReducer = createReducer(
  initialState,
  on(retrievedLocationList, (oldState, { locations }) => {
    return [...oldState, ...locations]
  })
);
