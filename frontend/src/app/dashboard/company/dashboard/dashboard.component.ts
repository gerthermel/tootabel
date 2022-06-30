import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/shared/services/company.service';
import { CompanyComponent } from '../company.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public company: CompanyService,
    public parent: CompanyComponent
  ) { }

  ngOnInit(): void {

    var id = this.route.params['_value'].id;
    this.company.companyData.id = id;
  }

}
