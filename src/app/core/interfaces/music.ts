type ERoleUser = 'user' | 'artist';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  sexe?: boolean;
  role: ERoleUser;
  email: string;
  password: string;
  isEmailVerified: boolean;
  artistId?: IArtist[];
  dateBirth: string;
  tel?: string;
  isArtist: boolean;
  likedArtists?: IArtist[];
  likedSongs?: ISong[];
  likedAlbums?: IAlbum[];
  likedPlaylists?: IPlaylist[];
  createdAt: any;
}

export interface ISong {
  id: string;
  title: string;
  /*cover: string;
  artistId: IArtist[];
  albumId: IAlbum[];
  genre: string;
  url: string;
  featuring?: IArtist[];
  visibility: boolean;
  nbEcoutes?: number;
  dateEcoute?: any;*/
}

export interface IArtist {
  id: string;
  fullname: string;
  avatar: string;
  description?: string;
  label: string;
  songs?: ISong[];
  albums?: IAlbum[];
  createdAt: any;
}

export interface IAlbum {
  id: string;
  title: string;
  cover: string;
  genre: string;
  artistId: IArtist[];
  songs: ISong[];
  visibility: boolean;
  year: string;
  createdAt: any;
}

export interface IPlaylist {
  id: string;
  name: string;
  cover: string;
  songs: ISong[];
  userId: IUser[];
}
