type ERoleUser ='user' | 'artist';


export interface IUser {
    role : ERoleUser;
    isEmailVerified :boolean;
    email : string;
    name : string;
    id: string;
  }
  interface IAccessToken {
    token : string ;
    expires : string | Date ;
  }


export interface Itoken {
    access: IAccessToken;
    refresh :IAccessToken;

  }