import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  myCompaniesLoading = true;
  companyLoading = true;
  companyData = {
    title: '',
  }
  public slidePanel = {//true == open, false == close
    createCompany:'hide',
    newEntry:'hide',
    mainMenu:'hide',
  }
  public backDrop:string = 'out';
  private activePanel;
  private openMenus = {
		createCompany: false, //bottom teams menu
    newEntry:false,
	}
	public myCompanies= [];
  constructor(
    public http:HttpClient,
    public alert:AlertService,
  ) { }

  setBackdrop(state){
		this.backDrop = state;
	}

  openSidebar(panel){
		if(panel != this.activePanel){
			this.slidePanel[this.activePanel] = 'hide';
		}

		if( this.slidePanel[panel] == 'show'){
			this.setBackdrop('hide')
			this.slidePanel[panel] = 'hide'
			this.activePanel = panel; 
		}else{
			this.setBackdrop('show')
			this.slidePanel[panel] = 'show';
			this.activePanel = panel; 
		}

	}

  closeSidebar(){
		this.setBackdrop('hide')
		this.slidePanel[this.activePanel] = 'hide';
	}

  getMyCompanies(){
    this.http.get(environment.apiUrl+'/tootable/company/my-companies', {withCredentials: true}).subscribe(
      (res)=>{
        var data:any = res;
        for( let company of data ){
          this.myCompanies.push(company)
				}
        this.myCompaniesLoading = false;
      },
      (error)=>{
        this.alert.error(error.error.message)
      }
    )

  }

  createCompany(companyForm:NgForm){
    var name = companyForm.value['name'];
    this.http.post(environment.apiUrl+'/tootable/company/create',{form:  companyForm.value}, {withCredentials: true}).subscribe(
      (res)=>{
		this.myCompanies.push(res['returnData'])
		this.closeSidebar();
      },
	  (error)=>{
		this.alert.error(error.error.message)
	  }

    )
  }

}
