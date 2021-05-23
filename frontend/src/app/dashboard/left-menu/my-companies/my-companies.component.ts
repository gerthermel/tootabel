import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.scss'],
})
export class MyCompaniesComponent implements OnInit {


  constructor(
    public company:CompanyService,

  ) { }

  ngOnInit(): void {
    this.company.getMyCompanies();

  }





}
