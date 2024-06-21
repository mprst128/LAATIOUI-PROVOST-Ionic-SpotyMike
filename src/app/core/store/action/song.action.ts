import { createAction, props } from '@ngrx/store';
import { ISong } from '../../interfaces/music';

export const loadSong = createAction('Load Song');
export const addSong = createAction('Add Song', props<{ songs: ISong[] }>());
