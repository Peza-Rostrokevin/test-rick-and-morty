import { createAction, props } from '@ngrx/store';
import { Episode } from 'src/app/models/espisode.interface';

export const retrievedEpisodeList = createAction(
  '[Episodes List/API] Retrieve Episodes Success',
  props<{ episodes: ReadonlyArray<Episode> }>()
);

export const retrievedEpisodeListFilter = createAction(
  '[Episodes List/Filter] Retrieve Episodes With Filter Success',
  props<{ episodes: ReadonlyArray<Episode> }>()
);
