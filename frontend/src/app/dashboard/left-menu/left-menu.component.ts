import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    public service:AppService,
    public http:HttpClient,
    public alert:AlertService,
    public company:CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      companyName: new FormControl(),
    });
  }
  
}
