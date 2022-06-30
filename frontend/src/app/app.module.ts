import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { alertModalContent } from './shared/services/alert.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { GermelRegistration } from '@germel-media/registration-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    alertModalContent,
    SignupComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    AppRoutingModule,
    NgbModule,
    GermelRegistration,
    BrowserAnimationsModule,
    BrowserTransferStateModule
  ],
  providers: [],
  entryComponents: [alertModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
