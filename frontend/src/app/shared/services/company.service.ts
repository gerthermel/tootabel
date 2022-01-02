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
    id:'',
    title: '',
  }

  public slidePanel = {//true == open, false == close
    createCompany:'hide',
    newEntry:'hide',
    mainMenu:'hide',
    newFilter:'hide',
    newCompanyModal:'hide',
    overviewMenu:'hide',
  }
  public backDrop:string = 'out';
  private activePanel = [];
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

  openSidebar(panel, ignore?:boolean){
    console.log(panel)
		if(panel != this.activePanel && !ignore){
			//this.slidePanel[this.activePanel] = 'hide';
      this.slidePanel[ this.activePanel[this.activePanel.length-1] ] = 'hide';
		}

		if( this.slidePanel[panel] == 'show'){
			this.setBackdrop('hide')
			this.slidePanel[panel] = 'hide'
			//this.activePanel = panel; 
      this.activePanel.push(panel)
		}else{
			this.setBackdrop('show')
			this.slidePanel[panel] = 'show';
			//this.activePanel = panel; 
      this.activePanel.push(panel)
		}

	}

  closeSidebar(name?:string){
    this.setBackdrop('hide')
    if( name ){
      //console.log(name)
    }else{
      console.log(this.activePanel)
      this.slidePanel[ this.activePanel[this.activePanel.length-1] ] = 'hide';
      this.activePanel.splice(-1)
      //console.log(this.activePanel)
    }
	}

  getMyCompanies(){
    if( this.myCompanies.length == 0){
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

  removeCompany(id:number){
    var companyId = this.myCompanies[id].id;
    this.myCompanies.splice(id, 1);
    this.http.delete(environment.apiUrl+'/tootable/company/'+companyId, {withCredentials: true}).subscribe(
      (res)=>{
      },
	  (error)=>{
		  this.alert.error(error.error.message)
	    }
    )
  }

}
