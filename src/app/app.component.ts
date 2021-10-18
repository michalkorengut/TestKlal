import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ReadfileService } from './services/readfile.service';
import { isObject, isDate } from 'util';
import { ConfigurationService } from './services/configuration.service';
import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { DomSanitizer } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  showTasks: boolean = true
  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['TaskNumber', 'TaskName', 'StatusID', 'EmployeeName', 'DepartmentID', 'DueDate'];
  filterSelectObj = [];
  selectedEmployee

  myData: any
  myEmployees: any
  myDepartments:any;
  isDataReady:boolean = false
  isDataReady2:boolean= false;
  selectedDepartment:number;
  constructor(
    private config: ConfigurationService,
    private readfileservice: ReadfileService
    
  ) {
  }
  ngOnInit() {
    
    this.geData()
  }



  geData() {
    this.readfileservice.getdata().subscribe(data => {
      this.myData = data['Tasks']
      this.myEmployees = data['Employees']
      this.myDepartments= data['Departments'];
      this.isDataReady = true
      this.isDataReady2 = true
      this.dataSource = new MatTableDataSource(this.myData);
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(this.myData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 0);
    })


  }

  func(DueDate) {
    return new Date() > new Date(DueDate)
  }

  selectDepartments(deptid:number){
    this.selectedDepartment=deptid;
  }
  ngAfterViewInit() {

  }
  showTaskFun() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.myData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);
    this.showTasks = true
  }



  filterData(event) {
    console.log('yyyyy');
    console.log(event);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.myData.filter(t=>t.EmployeeName ==event));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);

  }

  onSelectEmployee(){
    setTimeout(() => {
      if(this.selectedEmployee =='-1'){
        this.dataSource = new MatTableDataSource(this.myData);
      }
      else{
        this.dataSource = new MatTableDataSource(this.myData.filter(t=>t.EmployeeName ==this.selectedEmployee));
      }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);

  }



}


