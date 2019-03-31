import { LocationsComponent } from './locations.component';
import { LocationsService } from './locations.service';//manual import cause of lacking auto-import


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
