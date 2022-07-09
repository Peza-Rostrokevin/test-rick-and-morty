import { createAction, props } from '@ngrx/store';
import { Episode } from 'src/app/models/espisode.interface';

export const retrievedEpisodeList = createAction(
  '[Episodes List/API] Retrieve Episodes Success',
  props<{ episodes: ReadonlyArray<Episode> }>()
);
