import { createAction, props } from '@ngrx/store';
import { Location } from 'src/app/models/location.interface';

export const retrievedLocationList = createAction(
  '[Locations List/API] Retrieve Locations Success',
  props<{ locations: ReadonlyArray<Location> }>()
);

export const retrievedLocationListFilter = createAction(
  '[Locations List/Filter] Retrieve Locations With Filter Success',
  props<{ locations: ReadonlyArray<Location> }>()
);
