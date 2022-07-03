import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { state, trigger, style, transition, animate } from '@angular/animations';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { TableService } from 'src/app/shared/services/table.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PermissionsService } from 'src/app/shared/services/permissions.service';

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
	trigger('slideCompany', [
		state('hide', style({
				'right': '-100vw',
			})),
		state('show', 
			style({
				'right': '0px',
			})),
		transition('show => hide', animate(150)),
		transition('hide => show', animate(150))
	]),
	trigger('slideUp', [
		state('hide', style({
				'bottom': '-100vh',
			})),
		state('show', 
			style({
				'bottom': '0px',
			})),
		transition('show => hide', animate(150)),
		transition('hide => show', animate(150))
	]),
  ]
})

export class DashboardComponent implements OnInit, AfterViewInit {
	private routeSub;
	public isBrowser;
	public companyName = 'Tompest Rakennus Oy';
	public userName = '/ Gerth Ermel';
  constructor(
    public auth:AuthService,
    public service:AppService,
    public company:CompanyService,
    public table:TableService,
    public permissions: PermissionsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) public platformId: Object,
  ) { 
	this.isBrowser = isPlatformBrowser(platformId)
  }



  ngOnInit(): void {
	console.log( this.company.userData[this.service.selectedUser]['titlename']  )
  }

  public returnZero() {
	return 0
}

	ngAfterViewInit(): void {
	}

}
