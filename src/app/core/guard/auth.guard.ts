<<<<<<< HEAD
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const localStore = inject(LocalStorageService);
  const token = localStore.getItem('token').getValue();
  console.log(token);
  return token != new Array() ? true : false;
=======
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
>>>>>>> 108c280 (first commit)
};
