import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer  } from '@angular/common';
import { AppService } from '../services/app.service';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public router:Router,
		@Inject(PLATFORM_ID) private platformId: Object,
		public auth:AuthService,
		public service:AppService,
	){

	}


	canActivate(
		next: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot): Observable<any> | any{

			/*if (isPlatformBrowser(this.platformId)) {*/
				return this.auth.getAuth().pipe(
					map(
						(data)=>{
							if(data){
								this.auth.isAuthenticated = true;
								this.service.isLoggedin = true;
								this.auth.userData = data;
								return true
							}else{
								this.auth.isAuthenticated = false
								this.service.isLoggedin = false;
								this.auth.userData = [];
								return true;
							}
							
						},
						(error)=>{
							this.auth.isAuthenticated = false
							this.service.isLoggedin = false;
							return false
						}
					)
				)
			/*}*/
		}
}

