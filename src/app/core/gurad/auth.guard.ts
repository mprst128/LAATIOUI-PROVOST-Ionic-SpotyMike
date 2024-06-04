import { CanActivateFn } from '@angular/router';
import {inject } from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';


export const authGuard: CanActivateFn = (route, state) => {
    const localStore= inject(LocalStorageService);
    const token = localStore.getItem('token').getValue();
    console.log(token);

  return true;
};