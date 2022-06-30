import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public mainLoading = false;
  public startLoaing = true;
  public title;
  public selectedCompany;
  public selectedUser;
  constructor() { }
}
