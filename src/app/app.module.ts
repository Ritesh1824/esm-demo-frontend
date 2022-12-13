import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortingHomeComponent } from './component/sorting-home/sorting-home.component';
import { AppHomeComponent } from './component/app-home/app-home.component';
import { AppRoutingModule } from './component/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './component/input/input.component';
import { OutputComponent } from './component/output/output.component';




@NgModule({
  declarations: [
    AppComponent,
    SortingHomeComponent,
    AppHomeComponent,
    InputComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
