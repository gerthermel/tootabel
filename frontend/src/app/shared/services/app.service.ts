import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public mainLoading = false;
  public isLoggedin = false;
  public title;
  public selectedCompany;
  constructor() { }
}
