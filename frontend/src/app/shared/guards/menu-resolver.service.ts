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




@Injectable({
  providedIn: 'root'
})

export class MenuResolver implements Resolve<object>{
    public data:any;
    constructor( 
      public table:TableService,
      @Inject(PLATFORM_ID) private platformId: Object,
      public http:HttpClient,
      public route:ActivatedRoute,
      public router:Router,
      public service:AppService,
      public company:CompanyService,
    ){ }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): Observable<object> | Promise<object> | object {
        if (isPlatformBrowser(this.platformId)) {
          //this.table.generateCalendarArray()
          if( this.company.myCompanies.length == 0){
            return  this.http.get(environment.apiUrl+'/tootable/company/my-companies', {withCredentials: true}).pipe(
              map(
                (res)=>{
                  var data:any = res;
                  for( let company of data ){
                    this.company.myCompanies.push(company)
                  }
                  this.company.myCompaniesLoading = false;
                  if( this.company.myCompanies.length == 1){
                    this.router.navigate(['/firma/'+this.company.myCompanies[0].id]); 
                  }
                },
                (error)=>{
                }
              )//end map
            )//enbd pipe
          }
        }//endif
    }//end of resolve
}//end of class