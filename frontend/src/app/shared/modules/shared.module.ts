import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { AlertService, alertModalContent } from '../services/alert.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyResolver } from '../guards/company-resolver.service';

@NgModule({
  declarations: [

  ],
  imports:[
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AlertService,
    CompanyResolver,
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})



export class SharedModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
}
