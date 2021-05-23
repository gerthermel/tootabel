import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public company:CompanyService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.company.companyData.title = 'Töölaud';
    })
  }

}
