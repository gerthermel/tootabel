import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public demo2 = true;
  public myCompaniesLoading = true;
  public companyLoading = true;
  public addWorkerLoading = false;
  public gettingWorkers = true;
  public companyWorkers = [];
  public companyId = 0;
  public companyData = {
    id:'',
    title:'',
  }
  public userData = {};
  
  public slidePanel = {//true == open, false == close
    createCompany:'hide',
    newEntry:'hide',
    mainMenu:'hide',
    newFilter:'hide',
    newCompanyModal:'hide',
    overviewMenu:'hide',
    userMenu:'hide',
    addWorker:'hide',
  }
  public backDrop:string = 'out';
  private activePanel = [];
  private openMenus = {
		createCompany: false, //bottom teams menu
    newEntry:false,
	}
	public myCompanies= [];
  public companyPermissions = {};


  constructor(
    public http:HttpClient,
    public alert:AlertService,
  ) { }

    hide(){
      console.log(this.myCompaniesLoading)
      this.myCompaniesLoading = false;
    }
  setBackdrop(state){
		this.backDrop = state;
	}

  loadMenu(){
    setTimeout(()=>{
      this.myCompaniesLoading = false;
    },2000)
  }

  openSidebar(panel, ignore?:boolean){
		if(panel != this.activePanel && !ignore){
      this.slidePanel[ this.activePanel[this.activePanel.length-1] ] = 'hide';
		}

		if( this.slidePanel[panel] == 'show'){
			this.setBackdrop('hide')
			this.slidePanel[panel] = 'hide'
      this.activePanel.push(panel)
		}else{
			this.setBackdrop('show')
			this.slidePanel[panel] = 'show';
      this.activePanel.push(panel)
		}

	}

  openAddWorkerPanel(){
    this.openSidebar('addWorker');
  }

  setCompanyId(id){
    this.companyId = id;
  }

  addWorker(f){
    var companyId = this.companyData.id;
    var code = f.value.code;
    this.addWorkerLoading = true;
    this.http.post(environment.apiUrl+'/tootable/company/add-worker',{code:  code, cid: this.companyId}, {withCredentials: true}).subscribe(
      (res)=>{
        //this.myCompanies.push(res['returnData'])
        console.log(res['data'])
        this.closeSidebar();
        this.addWorkerLoading = false;
      },
      (error)=>{
        this.addWorkerLoading = false;
        this.alert.error(error.error.message)
      }
    )
  }

  getWorkers(id){
    var companyId = companyId;
    return new Promise(resolve => {
      this.http.get(environment.apiUrl+'/tootable/company/'+id+'/get-workers', {withCredentials: true}).subscribe(
        (res)=>{
          this.gettingWorkers = false;
          this.companyWorkers = res['workers'];
        },
        (error)=>{

          this.gettingWorkers = false;
          this.alert.error(error.error.message)
        }
      )
      
    })
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
