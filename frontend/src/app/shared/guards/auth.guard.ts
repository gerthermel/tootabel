import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser, isPlatformServer  } from '@angular/common';
import { RoomService } from '../services/room.service'
import { AppService } from '../services/app.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public auth: AuthService,
		private route: Router,
		public room: RoomService,
		public app: AppService,
		@Inject(PLATFORM_ID) private platformId: Object,
	){

	}


	canActivate(
		next: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot): Observable<any>{
			if (isPlatformBrowser(this.platformId)) {
				return this.auth.getAuth().pipe(
					map(
						(data)=>{
							if(data){
								this.auth.isAuthenticated = true
								this.auth.userData = data;
								this.app.myRooms = data['rooms'];
								if( data['lastRoom'] ){
									this.room.currentRoom.push(data['lastRoom']);
									return this.route.parseUrl('/room/'+data['lastRoom']);
								}else{
									return true;
								}
							}else{
								this.auth.isAuthenticated = false
								this.auth.userData = [];
								return true;
							}
							
						},
						(error)=>{
							this.auth.isAuthenticated = false
							return false
						}
					)
				)
			}
	}
}

