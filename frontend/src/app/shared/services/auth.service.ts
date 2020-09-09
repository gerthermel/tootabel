import { Injectable, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
//import { AlertService } from './alert.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
	authChanged = new EventEmitter();
	public isAuthenticated = false;
	public userData:any = {};
	constructor( 
		private http: HttpClient, 
		private router: Router,
		//public alert: AlertService,
	) { 

	}

	checkAuth(){
		return this.http.get(environment.apiUrl+'/server/page/auth/isAuth', {withCredentials: true})
	}

	getAuth(){
		return this.http.get(environment.apiUrl+'/server/page/auth', {withCredentials: true});
	}

	isAuth(){
		return this.isAuthenticated;
	}

	signIn(alias:string, password:string){
		return this.http.post(environment.apiUrl+'/server/page/sign-in', {alias: alias, password: password}, {withCredentials: true});
	}

	signInQuick(alias:string, password:string){
		this.http.post(environment.apiUrl+'/server/page/sign-in', {alias: alias, password: password}, {withCredentials: true}).subscribe(
			(data)=>{
				this.isAuthenticated = true;
				this.userData = data;
				localStorage.setItem('authData', JSON.stringify({isAuth:true, userData: data}))
				this.authChanged.emit( data )
				//window.location.reload();
			},
			(error) => {
				//this.alert.error(error.error.message)
			}
		);
	}

	signOut(){
		this.http.get(environment.apiUrl+'/server/page/sign-out', {withCredentials: true}).subscribe(
			(data)=>{
				this.isAuthenticated = false;
				this.userData = {};
				localStorage.setItem('authData', JSON.stringify({isAuth:false, userData: {}}))
				this.authChanged.emit( data )
			},
			(error) => {
				//this.alert.error(error.error.message)
			}
		);
	}
}
