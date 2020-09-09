import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer  } from '@angular/common';
import { AppService } from '../services/app.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public router:Router,
		@Inject(PLATFORM_ID) private platformId: Object,
	){

	}


	canActivate(
		next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | any{
			if(false){
				return true;
			}
			else{
				return this.router.parseUrl("/sisene");
			}
		}
}

