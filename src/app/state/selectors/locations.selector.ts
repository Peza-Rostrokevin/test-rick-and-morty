import { createFeatureSelector } from '@ngrx/store';
import { Location } from 'src/app/models/location.interface';

export const selectLocations = createFeatureSelector<ReadonlyArray<Location>>('locations');

