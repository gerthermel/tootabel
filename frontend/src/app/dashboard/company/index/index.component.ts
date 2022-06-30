import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { TableService } from 'src/app/shared/services/table.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { CompanyService } from 'src/app/shared/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { PermissionsService } from 'src/app/shared/services/permissions.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [NgbDropdownConfig]
})
@Injectable({
  providedIn: 'root' // just before your class
})
export class IndexComponent implements OnInit {
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
  }


  

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
      var data = response.resolver[0];
      

    })

    this.routeSub = this.route.params.subscribe(params => {
      this.service.selectedUser = params['id']
      setTimeout(() => {
        this.table.generateYears();
        this.table.generateMonths();
        this.table.generateDays();
        setTimeout(() => {
          let el = document.getElementById('today');
        })

      })
      this.table.getData();
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
