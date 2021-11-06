import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Renderer2, RendererFactory2 } from '@angular/core';
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
  public weeksInMonth;
  @Input() selectedDay = this.currentDay;
  @Input() selectedMonth = this.currentMonth;
  @Input() selectedYear = this.currentYear;
  public filterSelectedMonth = this.currentMonth;
  public filterSelectedYear = this.currentYear;
  public hours:object = {};
  public totalHours = 0;
  public tyymaad;
  public updateBuffer;
  private renderer:Renderer2;
  constructor(
    public service:AppService,
    public http: HttpClient,
    public alert:AlertService,
    public company:CompanyService,
    public rendererFactory:RendererFactory2
  ) { 
  }
  
  getData(){
    this.http.get(environment.apiUrl+`/tootable/table/${this.service.selectedCompany}/hours/${this.filterSelectedMonth}/${this.filterSelectedYear}`, {withCredentials: true}).subscribe(
      (res)=>{
        this.hours = res['data'];
        this.isTableLoading = false;
        this.totalHours = res['hours'];
        this.tyymaad = res['tyymaad'];
        this.getWeeksInMonth();
        console.log(this.weeksInMonth)
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
    var formData = new FormData()
    var date = `${this.selectedYear}-${this.selectedMonth+1}-${this.selectedDay}`;
    formData.append('company_id', this.service.selectedCompany)
    formData.append('date', date)
    formData.append('month', `${this.selectedMonth+1}`)
    formData.append('year', `${this.selectedYear}`)
    formData.append('day', `${this.selectedDay}`)
    formData.append('notes', f.value['notes'])
    formData.append('hours', f.value['hours'])
    formData.append('object', f.value['object'])
    //form['company_id'] = this.service.selectedCompany;
    //form['date'] = date;
    //form['month'] = this.selectedMonth+1;
    //form['year'] = this.selectedYear;
    //form['day'] = this.selectedDay;
    this.insertNew(formData).subscribe(
      (res)=>{
        this.addHours(res);
      },
	    (error)=>{
		    this.alert.error(error.error.message)
	    }
    );
    this.company.closeSidebar()
  };

  addHours(res){
    let date = res['data']['date'];
    this.hours[ date ][ res['data']['id'] ] = res['data'];
  }

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

  quickNew(event){
    var row = event.currentTarget.parentElement.parentElement
    clearTimeout(this.updateBuffer);
    this.updateBuffer = setTimeout(()=>{
      if( row.getAttribute('itemId')==0 ){
        var value = event.target.value;
        var propertyName = event.target.getAttribute('property')
        var formData: FormData = new FormData();
        formData.append('company_id', this.service.selectedCompany);
        formData.append('date', `${this.selectedYear}-${this.selectedMonth+1}-${row.getAttribute('day')}`);
        formData.append(`${propertyName}`, value);
        this.insertNew(formData).subscribe(
          (res)=>{
            this.addHours(res); 
            var id = res['data']['id'];
            row.setAttribute('itemId',id)
          },
          (error)=>{
            this.alert.error(error.error.message)
          }
        );
      }else{
        console.log('needs to edit')
      }
    },800)
  }

  insertNew(form){
    return this.http.post(environment.apiUrl+'/tootable/table/new-entry', form, {withCredentials: true})
  }
  
  edit(event){
    var itemId = event.currentTarget.parentElement.parentElement.getAttribute('itemId');
    clearTimeout(this.updateBuffer);
    this.updateBuffer = setTimeout(()=>{
      var value = event.target.value;
      var propertyName = event.target.getAttribute('property')
      var formData: FormData = new FormData();
      formData.append('id', itemId);
      formData.append('property', propertyName);
      formData.append('value', value);
      this.http.put(environment.apiUrl+'/tootable/table/edit-entry', formData, {withCredentials: true}).subscribe(
        
      )
    }, 800);



  }

 getWeeksInMonth() {
    const year = this.selectedYear
    const month = this.selectedMonth
    const weeks = [],
      firstDate = new Date(year, month, 1),
      lastDate = new Date(year, month + 1, 0),
      numDays = lastDate.getDate();
  
    let dayOfWeekCounter = firstDate.getDay();
  
    for (let date = 1; date <= numDays; date++) {
      if (dayOfWeekCounter === 0 || weeks.length === 0) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push(date);
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }
    this.weeksInMonth = weeks
      .filter((w) => !!w.length)
      .map((w) => ({
        start: w[0],
        end: w[w.length - 1],
        dates: w,
      }));
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
  convertToDate(string){
    console.log(string)
    return  new Date(string)
  }
}
