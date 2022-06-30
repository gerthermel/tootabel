import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/shared/services/app.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  constructor(
    public auth:AuthService,
    public service:AppService,
  ){ }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      alias: new FormControl(),
      password: new FormControl(),
   });
  }

  onSubmit(){
		var alias:string = this.signInForm.get('alias').value
		var password:string = this.signInForm.get('password').value
		this.auth.signIn(alias, password).subscribe(
      (res)=>{
        this.auth.isAuthenticated = true
      }
    )
		//this.modalRef.close();
	}

}
