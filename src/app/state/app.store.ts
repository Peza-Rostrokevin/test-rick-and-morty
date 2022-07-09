import { ActionReducerMap } from "@ngrx/store";
import { Character } from "../models/character.interface";
import { Episode } from "../models/espisode.interface";
import { Location } from "../models/location.interface";
import { characterReducer } from "./reducers/character.reducer";
import { episodeReducer } from "./reducers/episode.reducer";
import { locationReducer } from "./reducers/location.reducer";


export interface AppState {
  characters: ReadonlyArray<Character>;
  episodes: ReadonlyArray<Episode>;
  locations: ReadonlyArray<Location>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer
}
