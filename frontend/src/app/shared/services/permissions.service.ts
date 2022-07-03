import { Injectable, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
//import { AlertService } from './alert.service';
import { environment } from '../../../environments/environment';
import { CompanyService } from './company.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
 /**
    mod_perm: 1, //modify group permissions
    mod_user_perm:2, //change user permissons group
    add_worker: 3,
    edit_worker_settings: 4,
    see_worker_table: 5,
    edit_worker_table: 6,
    remove_worker: 7,
  */
export class PermissionsService{
	public companyPermissions:object = {};
	public myPermissions:object = {};
	public locs = {};
	public defaults = {};

	constructor( 
		private http: HttpClient, 
		private router: Router,
		public company: CompanyService,
    public alert:AlertService,
		//public alert: AlertService,
	) { 

	}

	getPermissions(){
		return this.http.get(environment.apiUrl+`/tootable/permissions/${ this.company.companyData.id }`, {withCredentials: true})
	}
  getAllPermissions(){
    /**
     * Loads authicated/loggedin users all permission
     * Loads perm locations
     * Loads perm defaults
     */
    return this.http.get(environment.apiUrl+`/tootable/permissions/all`, {withCredentials: true})
  }

	loadPermissions(){
		this.http.get(environment.apiUrl+`/tootable/permissions/`, {withCredentials: true}).subscribe(
			(res)=>{
        this.locs = res['locations'];
        this.defaults = res['defaults'];
			}
		)
	}

  hasPermission(name:string, code?:string){
    if(!code){
      console.error(name+' '+code)
      return false;
    }
    var location = this.permissionLocation(name)
    var code = code.toString();
    var char = code.charAt(location)
    if( char == '1'){
      return true;
    }else{
      return false;
    }
  }

  permissionLocation(name:string){

    if(Object.keys(this.locs).length == 0){
      this.alert.error('Error: Permissions Locs not loaded')
      return;
    }
    var location = this.locs[name]-1;
    return location;
  }

}
