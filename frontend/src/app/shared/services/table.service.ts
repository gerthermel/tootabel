import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, Input, Renderer2, RendererFactory2 } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';
import { AppService } from './app.service';
import { CompanyService } from './company.service';
import * as _ from 'lodash' 

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
  public entryStatus = {};
  public entryQueue = {}; //queue of items that needs to be added, because first time is being inserted.
  public saveHistory = {};
  private renderer:Renderer2;
  constructor(
    public service:AppService,
    public http: HttpClient,
    public alert:AlertService,
    public company:CompanyService,
    public rendererFactory:RendererFactory2,
  ) { 
  }
  
  public getData(){
    this.http.get(environment.apiUrl+`/tootable/table/${this.service.selectedCompany}/hours/${this.filterSelectedMonth}/${this.filterSelectedYear}`, {withCredentials: true}).subscribe(
      (res)=>{
        this.hours = res['data'];
        console.log(this.hours)
        this.isTableLoading = false;
        this.totalHours = res['hours'];
        this.tyymaad = res['tyymaad'];
        this.getWeeksInMonth();
      },
      (error)=>{

      }
    )
  }

  public filterObjects(){
    console.log(this.tyymaad);
  }

  public getDaysInMonth(month,year) {
    return new Date(year, month+1, 0).getDate();
  }

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
        delete this.hours['data'][date][0]
        this.addHours(res);
      },
	    (error)=>{
		    this.alert.error(error.error.message)
	    }
    );
    this.company.closeSidebar()
  };

  public addHours(res){
    let data = res['data']
    let date = data['date'];
    if(!this.hours['data'][ date ][ data['id'] ]){
      this.hours['data'][ date ][ data['id'] ] = data
    }else{
      console.log(this.hours['data'][ date ][data['id']])
      Object.assign(this.hours['data'][ date ][data['id']], data)
    }
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

  public getHours(){
    return this.http.get(environment.apiUrl+`/tootable/table/${this.service.selectedCompany}/hours`, {withCredentials: true})
  }

  public prevMonth(){
    this.isTableLoading = true;
    if( this.filterSelectedMonth > 0 ){
      this.filterSelectedMonth = this.filterSelectedMonth-1
      this.getData();
    }
  }

  public nextMonth(){
    this.isTableLoading = true;
    if( this.filterSelectedMonth < 11 ){
      this.filterSelectedMonth = this.filterSelectedMonth+1
      this.getData();
    }
  }

  public checkRowSatus(date){
    if( this.entryStatus[date] ){
      return this.entryStatus[date]['loading']
      /*
      if( this.entryStatus[date] ){
        var key = Object.keys(this.entryStatus[date])[0];
        return this.entryStatus[date][key]['loading'];
      }else{
        return false;
      }
      */
    }else{
      return false;
    }
  }

  public setRowStatus(date, status){
    if( !this.entryStatus[date] ){
      this.entryStatus[date] = {}
    }
    this.entryStatus[date] = {'loading':status,}
  }

  public insertIntoQueue(date, data){
    
    if( !this.entryQueue[date] ){
      this.entryQueue[date] = {}
    }
    this.entryQueue[date][data.propertyName] = data;
    console.log('We have inserted your data into queue')
  }

  public setSaveHistory(date, property, value){
    if( !this.saveHistory[date] ){
      this.saveHistory[date] = {}
    }
    if( !this.saveHistory[date][property] ){
      this.saveHistory[date][property] = {}
    }
    this.saveHistory[date][property] = {'value': value}
  }

  public getSaveHistory(date, property, value){
    if(this.saveHistory[date] !== undefined && this.saveHistory[date][property] !== undefined && this.saveHistory[date][property]['value'] == value){
      return true;
    }else{
      return false;
    }
  }

  public timeOut(event){
    clearTimeout(this.updateBuffer);
    this.updateBuffer = setTimeout(()=>{ 
      this.quickNew(event)
    },800)

  }

  public focusOut(event){
    var row = event.target.parentElement.parentElement
    var date = row.getAttribute('date')
    var propertyName = event.target.getAttribute('property')
    var value = event.target.innerText;
    clearTimeout(this.updateBuffer);
    if( !this.getSaveHistory(date, propertyName, value)){
      this.quickNew(event)
    }
  }

  public async getRowInputs(event){
    console.log('getting input of all td')
    return new Promise(resolve => {
      let data = {}
      var inputList = event.target.parentElement.parentNode.children;
      for (let key in inputList) {
        var propertyName = inputList[key].getAttribute('property')
        if(propertyName){
          console.log('returning all input of all td')
          var value = inputList[key].innerText
          
          data[propertyName] = value
          console.log(data);
        }
      }
      resolve(data);
    })
  }

  public async  quickNew(event){
    if( !environment.quickAdd ){
      return;
    }
    console.log('quickNew')
    var rowInputs = this.getRowInputs(event)
      var row = event.target.parentElement.parentElement
      var date = row.getAttribute('date')
      var propertyName = event.target.getAttribute('property')
      var value = event.target.innerText;

      //We save so that later we can check if we need to run insertion again or not
      this.setSaveHistory(date, propertyName, value)

      var formData: FormData = new FormData();
      formData.append('company_id', this.service.selectedCompany);
      formData.append('date', date);
      formData.append(`${propertyName}`, value);

      if( row.getAttribute('itemId')==0 ){ //if row has been inserted once before then there is id present
        
        if( this.checkRowSatus(date) ){
          //we need to edit when first insert of row is done and id has been set so we add these into queue
          console.log('we have already insertion in progress so we add into queue instead')
          this.insertIntoQueue(date, {'company_id':this.service.selectedCompany, 'date':date,'propertyName':propertyName,'value':value,'loading':true,})
        }else{
          this.setRowStatus(date, true) //we set row into loading so that we can check it
          this.insertNew(formData).subscribe(
            (res)=>{
              var id = res['data']['id'];
               //we get other td values and merge them
              console.log('-----------------')
              Object.assign(this.hours['data'][date][0], res['data']); 
              delete this.hours['data'][date][0]
              console.log('-----------------')
              this.addHours(res); //once they merged we insert into main object variable
              row.setAttribute('itemId',id)
              this.setRowStatus(date, false)
              console.log('Lets check if anything is in queue')
              if( this.entryQueue[date] ){
                console.log('There are items in que')
                for (let key in this.entryQueue[date]) {
                  let item = this.entryQueue[date][key];
                  let object = {
                    'id':id,
                    'property':item.propertyName,
                    'value':item.value
                  }
                  Object.assign(this.hours['data'][date][id], {[item.propertyName]:item.value}); 
                  this.editQuick(object);
                  this.entryQueue[date].splice(key, 1);
                }
              }

            },
            (error)=>{
              this.alert.error(error.error.message)
            }
          );
        }

      }else{
        console.log('needs to edit')
      }
  }

  insertNew(form){
    return this.http.post(environment.apiUrl+'/tootable/table/new-entry', form, {withCredentials: true})
  }

  editQuick(object){
    var formData: FormData = new FormData();
    formData.append('id', object.id);
    formData.append('property', object.property);
    formData.append('value', object.value);
    this.http.put(environment.apiUrl+'/tootable/table/edit-entry', formData, {withCredentials: true}).subscribe(
        (res)=>{
          //this.addHours(res); 
        }
      )
  }

  edit(event){
    var itemId = event.currentTarget.parentElement.parentElement.getAttribute('itemId');
    clearTimeout(this.updateBuffer);
    this.updateBuffer = setTimeout(()=>{
      var value = event.target.innerText;
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
        delete this.hours['data'][date][id];
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
