import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer  } from '@angular/common';
import { AppService } from '../services/app.service';
import { AuthService } from '../services/auth.service';
import { PermissionsService } from '../services/permissions.service';

@Injectable({
	providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
	constructor(
		public router:Router,
		@Inject(PLATFORM_ID) public platformId: Object,
		public auth:AuthService,
		public service:AppService,
		public app:AppService,
    public permissions:PermissionsService,
	){

	}


	canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.permissions.getAllPermissions().pipe(
        map(
          (res)=>{
            this.permissions.myPermissions = res['data'];
            this.permissions.locs = res['perm']['locations'];
            this.permissions.defaults = res['perm']['defaults'];
            return true;
          }
        )
      )
		}//end
}

