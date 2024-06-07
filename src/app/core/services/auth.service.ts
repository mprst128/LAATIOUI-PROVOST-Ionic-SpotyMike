import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { EAuthPage } from '../models/refData';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getPageAuth() {
=======
import{EAuthPage} from

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getPageAuth(){
>>>>>>> 108c280 (first commit)
    return of(EAuthPage.Login);
  }
}
