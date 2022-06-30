import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AppService } from 'src/app/shared/services/app.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isSaving = false;
  company:any = {
    name: this.service.companyData.title
  };
  constructor(
    public service:CompanyService,
    public http:HttpClient,
    public alert:AlertService,
  ) { }

  ngOnInit(): void {
  }

  public save(data){
    this.isSaving = true;
    var companyId = this.service.companyData.id
    var companyRow = this.service.myCompanies.find(x => x.id == companyId);
        companyRow.name =  data.name;
    this.service.companyData.title = data.name;
    this.http.put(environment.apiUrl+`/tootable/company/${ companyId }`,{data}, {withCredentials: true}).subscribe(
      (res)=>{
        this.isSaving = false;
      },
      (err)=>{
        this.alert.error(err.error.message)
        this.isSaving = false;
      }
    )

  }

}
