import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';
import { AppService } from './app.service';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public isLoading = true;
  public now = new Date();
  public daysArray = new Array();
  public isTableLoading = false;
  
  public currentDay = this.now.getDate();
  public currentMonth = this.now.getMonth();
  public currentYear = this.now.getFullYear();
  public daysInMonth = this.getDaysInMonth(1, 2012);
  public currentDate = `${this.currentYear}-${this.currentMonth+1}-${this.currentDay}`
  public daysInCurrentMonth = new Array(new Date(this.now.getFullYear(), this.now.getMonth()+1, 0).getDate());
  public monthArray = new Array() 
  public months:{[key: number]: string} = {
    0:'Jaanuar',
    1:'Veebruar',
    2:'Märts',
    3:'Aprill',
    4:'Mai',
    5:'Juuni',
    6:'Juuli',
    7:'August',
    8:'September',
    9:'Oktoober',
    10:'November',
    11:'Detsember',
  }
  public years = new Array();
  @Input() selectedDay = this.currentDay;
  @Input() selectedMonth = this.currentMonth;
  @Input() selectedYear = this.currentYear;
  public filterSelectedMonth = this.currentMonth;
  public filterSelectedYear = this.currentYear;
  public hours:object = {};
  public totalHours = 0;
  public tyymaad;
  public updateBuffer;
  constructor(
    public service:AppService,
    public http: HttpClient,
    public alert:AlertService,
    public company:CompanyService
  ) { 
  }
  
  getData(){
    this.http.get(environment.apiUrl+`/tootable/table/${this.service.selectedCompany}/hours/${this.filterSelectedMonth}/${this.filterSelectedYear}`, {withCredentials: true}).subscribe(
      (res)=>{
        this.hours = res['data'];
        this.isTableLoading = false;
        this.totalHours = res['hours'];
        this.tyymaad = res['tyymaad'];
      },
      (error)=>{

      }
    )
  }

  public getDaysInMonth(month,year) {
    return new Date(year, month+1, 0).getDate();
  };

  public getDays() {
    return new Date(this.selectedYear, this.filterSelectedMonth+1, 0).getDate();
  };


  public generateYears(){
    for(let i = this.currentYear-5;i <= this.currentYear; i++){
      this.years.push(i)
    }
  }

  public generateMonths(){
    this.monthArray = [0,1,2,3,4,5,6,7,8,9,10,11]
  }

  public generateDays(){
    var days = this.getDaysInMonth(this.selectedMonth, this.selectedYear);
    this.daysArray = [];
    for (let i = 1; i <= days; i++) {
      this.daysArray.push(i)
      //this.hours[this.selectedYear][this.selectedMonth][i] = {};
    }
  }

  public dayChange(value){
    this.selectedDay = parseInt(value);
  }
  
  public monthChange(value){
    this.selectedDay = 1;
    var key = value;
    var month = this.months[value];
    this.selectedMonth = parseInt(value);
    this.generateDays();
  }

  public createNewEntry(f:NgForm){
    var form = f.value;
    var date = `${this.selectedYear}-${this.selectedMonth+1}-${this.selectedDay}`;
    form['company_id'] = this.service.selectedCompany;
    form['date'] = date;
    form['month'] = this.selectedMonth+1;
    form['year'] = this.selectedYear;
    form['day'] = this.selectedDay;
    this.http.post(environment.apiUrl+'/tootable/table/new-entry',{form:  form}, {withCredentials: true}).subscribe(
      (res)=>{
        var newEntry = { 'task': form['tasks'], 'hours': form['hours'] };
        //console.log(this.hours)
        let date = `${form['year']}-${form['month']}-${form['day']}`;
        this.hours[ date ][ res['data']['id'] ] = res['data'];
        console.log(this.hours);
        this.company.closeSidebar()
      },
	    (error)=>{
		    this.alert.error(error.error.message)
	    }
    )
  };

  public generateCalendarArray(){
    for(let y = this.currentYear-10;y <= this.currentYear+10; y++){
      this.hours[y] = {};
      for(let m = 0;m <= 12; m++){
        this.hours[y][m] = {};
        var days = this.getDaysInMonth(m,y)
        for (let d = 1; d <= days; d++) {
          this.hours[y][m][d] = {};
        }
      }

    }
  }

  getHours(){
    return this.http.get(environment.apiUrl+`/tootable/table/${this.service.selectedCompany}/hours`, {withCredentials: true})
  }

  prevMonth(){
    this.isTableLoading = true;
    if( this.filterSelectedMonth > 0 ){
      this.filterSelectedMonth = this.filterSelectedMonth-1
      this.getData();
    }
  }

  nextMonth(){
    this.isTableLoading = true;
    if( this.filterSelectedMonth < 11 ){
      this.filterSelectedMonth = this.filterSelectedMonth+1
      this.getData();
    }
  }

  edit(event){
    clearTimeout(this.updateBuffer);
    this.updateBuffer = setTimeout(()=>{
      console.log('saved')
      var value = event.target.value;
      var itemId = event.target.getAttribute('itemId');
      var propertyName = event.target.getAttribute('property')
      var formData: FormData = new FormData();
      formData.append('id', itemId);
      formData.append('property', propertyName);
      formData.append('value', value);
      console.log(formData);
      this.http.put(environment.apiUrl+'/tootable/table/edit-entry', formData, {withCredentials: true}).subscribe(
        
      )
    }, 800);



  }

  deleteEntry(id, date){
    var itemId =  id;
    this.http.delete(environment.apiUrl+`/tootable/table/entry/${id}`, {withCredentials: true}).subscribe(
      (res)=>{
        delete this.hours[date][id];
      },
      (error)=>{
        this.alert.error(error.error.message)
      }
    )
  }
}
