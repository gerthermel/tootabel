import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public mainLoading = false;
  public myRooms = [];
  constructor() { }
}
