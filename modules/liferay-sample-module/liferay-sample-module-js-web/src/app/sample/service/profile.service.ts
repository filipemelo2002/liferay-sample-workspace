import { Injectable } from '@angular/core';


declare const Liferay: any;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  isSignedIn (): boolean {
    return Liferay.ThemeDisplay.isSignedIn();
  }
}
