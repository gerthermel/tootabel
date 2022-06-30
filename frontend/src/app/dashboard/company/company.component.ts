import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { TableService } from 'src/app/shared/services/table.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { CompanyService } from 'src/app/shared/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { PermissionsService } from 'src/app/shared/services/permissions.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [NgbDropdownConfig]
})
@Injectable({
  providedIn: 'root' // just before your class
})
export class CompanyComponent implements OnInit, AfterViewInit {
  private routeSub;
  public hasAccess = false;
  public analytics = false;
  public quickAdd = environment.quickAdd;
  public quickEdit = environment.quickEdit;

  objectKeys = Object.keys;
  constructor(
    public service:AppService,
    public table:TableService,
    public company:CompanyService,
    private route: ActivatedRoute,
    public cdr:ChangeDetectorRef,
    public permissions:PermissionsService,
    config: NgbDropdownConfig
  ) { 
    config.placement = 'top-left';
    config.autoClose = true;
  }


  
  ngAfterViewInit(){
  }

  ngOnInit(): void {

    this.route.data.subscribe((response: any) => {
      var data = response.resolver[0];

      setTimeout(() => {
        this.table.generateYears();
        this.table.generateMonths();
        this.table.generateDays();
        setTimeout(() => {
          let el = document.getElementById('today');
        })

      })
    })

    this.routeSub = this.route.params.subscribe(params => {
      var workerId = this.route.parent.params['_value']['id'];
      var permissions = this.permissions.myPermissions[workerId];
      //this.hasAccess = this.permissions.hasPermission('access_tables', permissions)
      this.analytics = this.permissions.hasPermission('analytics', permissions)
      this.service.selectedCompany = params['id']
      //this.table.getData();

    }); 
  }
  
  convertMonth(number){
    return parseInt(number);
  }

  public filterMonthChange(month){
    this.table.isTableLoading = true;
    this.table.filterSelectedMonth = month;
    this.table.getData();
  }

  public filterYearChange(year){
    this.table.filterSelectedYear = year;
    this.table.getData();
  }

  
  public returnZero() {
    return 0
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
