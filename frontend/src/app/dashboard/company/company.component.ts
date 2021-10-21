import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { TableService } from 'src/app/shared/services/table.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { CompanyService } from 'src/app/shared/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

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

  objectKeys = Object.keys;
  constructor(
    public service:AppService,
    public table:TableService,
    public company:CompanyService,
    private route: ActivatedRoute,
    public cdr:ChangeDetectorRef,
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
        //this.todayRow.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.table.generateYears();
        this.table.generateMonths();
        this.table.generateDays();
        this.company.companyData.title = data['name'];
        this.company.companyData.id = data['id'];
        setTimeout(() => {
          let el = document.getElementById('today');
          el.scrollIntoView({block: "center"});
        })

      })
    })

    this.routeSub = this.route.params.subscribe(params => {
      this.service.selectedCompany = params['id']
      this.table.getData();

    });
  }
  convertMonth(number){
    return parseInt(number);
  }
  public filterMonthChange(month){
    console.log('month')
    this.table.filterSelectedMonth = month;
    this.table.getData();
  }

  public filterYearChange(year){
    console.log('year')
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
