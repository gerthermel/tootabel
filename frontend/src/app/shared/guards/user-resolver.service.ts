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

export class UserResolver implements Resolve<object>{
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
        var userId = route.params['id'];
        
        this.service.selectedUser = userId;
        if( this.company.userData[userId] ){
          return this.company.userData[userId];
        }else{
          return this.http.get(environment.apiUrl+`/tootable/user/${route.params['id']}`, {withCredentials: true}).pipe(
            map(
              (data:any)=>{
                var data = data['data'];
                var name = '';
                
                if(data.firstname || data.lastname){
                  var name = `/ ${data.firstname} ${data.lastname}`
                }else{
                  var name = `/ Kasutaja${data.user_code}`
  
                }
                data['titlename'] = name;
                this.company.userData[userId] = data;
              },
              (error)=>{
              }
            )//end map
          )//enbd pipe
        }
      }//endif
    }//end of resolve
}//end of class