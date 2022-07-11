import { createReducer, on } from '@ngrx/store';
import { Episode } from 'src/app/models/espisode.interface';
import { retrievedEpisodeList, retrievedEpisodeListFilter } from '../actions/episode.actions'

export const initialState: ReadonlyArray<Episode> = [];

export const episodeReducer = createReducer(
  initialState,
  on(retrievedEpisodeList, (oldState, { episodes }) => {
    return [...oldState, ...episodes]
  }),
  on(retrievedEpisodeListFilter, (oldState, { episodes }) => {
    return [...episodes]
  })
);
