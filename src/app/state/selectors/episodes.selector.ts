import { createFeatureSelector } from '@ngrx/store';
import { Episode } from 'src/app/models/espisode.interface';

export const selectEpisodes = createFeatureSelector<ReadonlyArray<Episode>>('episodes');


