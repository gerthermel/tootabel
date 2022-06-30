import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Session } from 'protractor';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  constructor(
    public auth:AuthService,
    public http:HttpClient,
  ) { }

  ngOnInit(): void {
    console.log(this.auth.userData.userData)
    this.settingsForm = new FormGroup({
      firstname: new FormControl( this.auth.userData.userData.firstname ),
      lastname: new FormControl( this.auth.userData.userData.lastname ),
      email: new FormControl( this.auth.userData.userData.email ),
    });
  }

  save(){
    this.http.put(environment.apiUrl+'/tootable/user/settings/save', {form: this.settingsForm.value} ,{withCredentials: true}).subscribe(
      (res)=>{
        this.auth.userData.firstname = this.settingsForm.value.firstname
        this.auth.userData.lastname = this.settingsForm.value.lastname
        this.auth.userData.email = this.settingsForm.value.email
      },
      (err)=>{

      }
    )
    console.log(this.settingsForm.value)
  }

}
