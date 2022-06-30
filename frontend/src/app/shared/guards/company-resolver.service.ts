import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import {PLATFORM_ID, Inject} from '@angular/core';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { map, tap } from "rxjs/operators";
import { isPlatformBrowser, isPlatformServer  } from '@angular/common';
import { TableService } from "../services/table.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AppService } from "../services/app.service";
import { CompanyService } from "../services/company.service";
import { PermissionsService } from "../services/permissions.service";




@Injectable({
  providedIn: 'root'
})

export class CompanyResolver implements Resolve<object>{
    public data:any;
    constructor( 
      public table:TableService,
      @Inject(PLATFORM_ID) private platformId: Object,
      public http:HttpClient,
      public route:ActivatedRoute,
      public service:AppService,
      public company:CompanyService,
      public permissions:PermissionsService,
    ){ }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): Observable<object> | Promise<object> | object {
      if (isPlatformBrowser(this.platformId)) {
        //this.table.generateCalendarArray()
        return this.http.get(environment.apiUrl+`/tootable/company/${route.params['id']}`, {withCredentials: true}).pipe(
          map(
            (data:any)=>{
              this.company.companyData = data['companyData'][0]
            },
            (error)=>{
            }
          )//end map
        )//enbd pipe
      }//endif
    }//end of resolve
}//end of class