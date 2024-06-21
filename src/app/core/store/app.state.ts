import { IPlaylist, ISong } from '../interfaces/music';

export interface AppState {
  songs: ISong[];
  playlist: IPlaylist[];
}
