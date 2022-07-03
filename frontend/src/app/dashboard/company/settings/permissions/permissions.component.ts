import { HttpClient } from '@angular/common/http';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import { delay } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { PermissionsService } from 'src/app/shared/services/permissions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  public isSaving = false;
  public loadingParmissions = true;
  public loadingParmissionsChecks = false;
  public selectedPermissionName:string = '';
  public selectedPermission:string = '';
  public selectedPermissonsLong:object = {};

  constructor(
    public permissions:PermissionsService,
    public alert:AlertService,
    public company:CompanyService,
    public http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.selectedPermissionName = 'omanik';

    this.selectedPermission = this.permissions.companyPermissions['omanik'];
    this.loadCheckboxes().then(
      ()=>{
        this.loadingParmissionsChecks = false;
      }
    );
  }

  public checkPermission(name){
    let location = this.permissions.locs[name]
    if( location ){
      var code = this.selectedPermission.charAt(location-1);
      if(code == '1'){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
    return false;
  }

  async getPermissions(){
    //this.loadingParmissions = false;
    return new Promise<void>(resolve => {
      this.permissions.getPermissions().subscribe(
        (res)=>{
          resolve()
        },
        (err)=>{
          this.alert.error(err.error.message)
          return;
        }
        )
    })
  }

  public loadCheckboxes(){
    return new Promise<void>(resolve => {
      for(let key in this.permissions.locs){ //.substring(0, 5)
        var loc = this.permissions.locs[key]-1;
        if( this.permissions.companyPermissions[this.selectedPermissionName].charAt(loc) == 0 ){
          this.selectedPermissonsLong[key] = false;
        }else{
          this.selectedPermissonsLong[key] = true;
        }
      }
      resolve();
    })

  }

  public defaultPerm(name){
    var code = '';
    var maxLength = Object.keys(this.permissions.locs).length;
    for(var i=0; i<maxLength; i++ ){
      if(name == 'leader'){
        code += 1;
      }else{
        var permName = Object.keys(this.permissions.locs)[i];
        if( typeof this.permissions.defaults[name][permName] != 'undefined'){
          code += this.permissions.defaults[name][permName];
        }else{
          code += 0;
        }
      }
    }
    return code;
  }

  public selectPermission( item ){
    this.loadingParmissionsChecks = true;
    this.selectedPermissionName = item;
    this.selectedPermission = this.permissions.companyPermissions[item];

    this.loadCheckboxes().then(
      ()=>{
        this.loadingParmissionsChecks = false;
      }
    );

  }

  public changePermission(name, event){
    this.selectedPermissonsLong[name] = event
  }

  public save(){
    this.isSaving = true;
    var companyId = this.company.companyData.id
    var code = this.permissionsEncode();
    var permissionName = this.selectedPermissionName;
    this.http.put(environment.apiUrl+`/tootable/permissions/update`,{ cid:companyId, code:code, perm:permissionName }, {withCredentials: true}).subscribe(
      (res)=>{
        this.isSaving = false;
      },
      (err)=>{
        console.error(err)
      }
    )
  }

  public permissionsEncode(){
    
    /*
    var code = this.selectedPermission;
    for(let name in this.selectedPermissonsLong){
      var value = this.selectedPermissonsLong[name];
      var location = this.permissions.locs[name];
      if(value){
        code += 1;
      }else{
        code += 0;
      }
    }
    return code;
    */
    var code = '';
    var maxLength = Object.keys(this.permissions.locs).length;
    for(let i=0; i<maxLength; i++ ){
      if(this.selectedPermissionName == 'omanik'){
        code += 1;
      }else{
        var name = Object.keys(this.permissions.locs)[i];
        if( this.selectedPermissonsLong[name] ){
          code += 1;
        }else{
          code += 0;
        }
      }
    }
    console.log(code)
    return code;
    /*
    
  var maxLength = Object.keys(this.permissions.locs).length;
    for(let i=0; i<maxLength; i++ ){
      if(this.selectedPermissionName == 'omanik'){
        code += 1;
      }else{
        var permName = Object.keys(this.permissions.locs)[i];
        console.log(permName)
        if( true ){

        }else{
          code += 0;
        }
      }
    }
    return code;
    */
  }  
    
}
