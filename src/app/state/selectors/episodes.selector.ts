import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Episode } from 'src/app/models/espisode.interface';

export const selectEpisodes = createFeatureSelector<ReadonlyArray<Episode>>('episodes');

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
