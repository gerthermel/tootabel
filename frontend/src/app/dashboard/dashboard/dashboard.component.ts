import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
	trigger('backDrop', [
		state('hide', style({
				'display':'none',
				'opacity':'0',
			})),
		state('show', 
			style({
				'display':'block',
				'opacity':'0.7',
			})),
		transition('hide => show', animate(150)),
		transition('show => hide', animate(150))
	]),
	trigger('slideLeft', [
		state('hide', style({
				'left': '-83px',
			})),
		state('show', 
			style({
				'left': '317px',
			})),
		transition('show => hide', animate(150)),
		transition('hide => show', animate(150))
	]),
	trigger('slideMain', [
		state('hide', style({
				'left': '-100vw',
			})),
		state('show', 
			style({
				'left': '0vw',
			})),
		transition('show => hide', animate(150)),
		transition('hide => show', animate(150))
	]),
	trigger('slideRight', [
		state('hide', style({
				'right': '-400px',
			})),
		state('show', 
			style({
				'right': '0px',
			})),
		transition('show => hide', animate(150)),
		transition('hide => show', animate(150))
	]),
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(
	public service:AppService,
    public company:CompanyService,
	public table:TableService,
	private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
	
  }

  public returnZero() {
	return 0
	}

    ngAfterViewInit(): void {
        this.cd.detectChanges();
    }
}
