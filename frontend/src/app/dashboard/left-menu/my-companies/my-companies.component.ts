import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { PermissionsService } from 'src/app/shared/services/permissions.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.scss']
})
export class MyCompaniesComponent implements OnInit {
  @ViewChild('accord') accord;
  
  public demo = false;
  public companies = [];
  public workersMenu = {
    workers1:'show'
  }

  constructor(
    public company:CompanyService,
    public dropdown: NgbDropdownConfig,
    public permissions:PermissionsService,
    public http:HttpClient,
    private route: ActivatedRoute,
  ) {
    dropdown.placement = 'bottom-right';
  }

  ngOnInit(): void {
    console.log('asd')
    
    this.http.get(environment.apiUrl+'/tootable/company/my-companies', {withCredentials: true}).subscribe(
        (res)=>{
          var data:any = res['data'];
          for( let row of data ){
            row['see_workers'] = this.permissions.hasPermission('see_workers',row['value']);
            this.companies.push(row)
          }
          this.company.myCompanies = this.companies;
          this.company.myCompaniesLoading = false;

        },
        (error)=>{
        }
      )
  }

  async selectCompany(id){
    var isOpen = this.accord.isExpanded('static-'+id);
    if(isOpen){
      var workers = await this.company.getWorkers(id);
    }
    
  }







}
