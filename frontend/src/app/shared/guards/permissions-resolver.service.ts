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
import {Router} from '@angular/router';
import { PermissionsService } from "../services/permissions.service";




@Injectable({
  providedIn: 'root'
})

export class PermissionsResolver implements Resolve<object>{
    public data:any;
    constructor( 
      public table:TableService,
      @Inject(PLATFORM_ID) private platformId: Object,
      public http:HttpClient,
      public route:ActivatedRoute,
      public router:Router,
      public permissions:PermissionsService
      
    ){ }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): Observable<object> | Promise<object> | object {
        if (isPlatformBrowser(this.platformId)) {
          return this.permissions.getAllPermissions().pipe(
            map(
              (res)=>{
                console.log(res);
                this.permissions.locs = res['perms']['locations']
                this.permissions.defaults = res['perms']['defaults']
              }
            )
          )
        }//endif
    }//end of resolve
}//end of class