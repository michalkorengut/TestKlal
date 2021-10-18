import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ConfigurationService } from '../services/configuration.service';
import { ReadfileService } from '../services/readfile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  AfterViewInit,OnInit {

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
  isDataReady:boolean = false
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
      this.isDataReady = true
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
