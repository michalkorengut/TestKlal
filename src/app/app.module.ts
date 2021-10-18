import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatPaginatorModule, MatDrawerContainer, MatDrawerContent } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { environment } from 'src/environments/environment';
import { WorkersModule } from './workers/workers.module';
import { HomeComponent } from './home/home.component';
import { DisplayDepartmentsComponent } from './display-departments/display-departments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayDepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    HttpClientModule,
    MatRippleModule,         
    MatDatepickerModule,        
    MatNativeDateModule  ,  
   MatIconModule,
   


   MatTableModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,

    MatRippleModule,         
    MatDatepickerModule,        
    MatNativeDateModule  , 
           
    MatPaginatorModule,
    
    WorkersModule
  ],
  providers: [

    HttpClientModule, 
    { provide: APP_INITIALIZER, useFactory: initConfigValues, deps: [ConfigurationService], multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    //{ provide: HTTP_INTERCEPTORS, useClass: ChacheHttpInterceptor },
    //{ provide: HTTP_INTERCEPTORS, useClass: ClientLogHttpInterceptor },
    //{ provide: HTTP_INTERCEPTORS, useClass: WebApiHttpInterceptor },
 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initConfigValues(config: ConfigurationService) {
  return (() => config.initConfiguration(environment.configPath));
}