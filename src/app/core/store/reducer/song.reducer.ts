import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ISong } from '../../interfaces/music';
import { createReducer, on } from '@ngrx/store';
import * as ActionSOngs from '../action/song.action';

export interface SongState extends EntityState<ISong> {
  load: boolean;
}

// START - Sort
export function selectUserId(a: ISong): string {
  return a.id;
}

export function sortByTitle(a: ISong, b: ISong): number {
  return a.title.localeCompare(b.title);
}

export const adaptater: EntityAdapter<ISong> = createEntityAdapter<ISong>({
  selectId: selectUserId,
  sortComparer: sortByTitle,
});

// END - Sort

export const initialState: SongState = adaptater.getInitialState({
  load: false,
});

export const songReducer = createReducer(
  initialState,
  on(ActionSOngs.loadSong, (state) => ({ ...state })),
  on(ActionSOngs.addSong, (state, listSong: any) => ({
    ...state,
    songs: listSong.songs,
  }))
);

// Recupération
export const { selectAll } = adaptater.getSelectors();
