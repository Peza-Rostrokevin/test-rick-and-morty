import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Location } from 'src/app/models/location.interface';

export const selectLocations = createFeatureSelector<ReadonlyArray<Location>>('locations');

/* export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
); */
