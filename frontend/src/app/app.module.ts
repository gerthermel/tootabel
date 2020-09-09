import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { alertModalContent } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    alertModalContent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [alertModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
