import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SongState, selectAll } from "../reducer/song.reducer";
import { ISong } from "../../interfaces/music";

export const selectStore = (state: AppState) => state.songs; // old
export const selectSongState = createFeatureSelector<SongState>("songs"); // New

export const selectStoreList = createSelector(selectSongState, selectAll);

// export const selectSortedSongsByLike = createSelector(
//   selectStoreList,
//   (songs) =>
//     songs.sort((a: ISong, b: ISong) => a.nbEcoutes(b.nbEcoutes)) // Tri supplémentaire par ID, si nécessaire
// );
