export interface LoginRequestError {
    code?: number;
    error: boolean;
    message: string;
  }


export interface LoginRequestSucess {
    code?: number;
    error: boolean;
    user: any;
    token : any;
    
  }