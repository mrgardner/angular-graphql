import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  setCookie(name: string, value: string, expires: string): void {
    const cookie = name + '=' + (value || '')  + '; expires=' + expires + '; path=/';
    document.cookie = cookie;
  }
  getCookie(name: string): string {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
  }
  clearCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }
}
