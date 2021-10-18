import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ReadfileService } from '../services/readfile.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  constructor(
    private readfileservice: ReadfileService
  ) {

  }
  @Output() selectEmployee: EventEmitter<any> = new EventEmitter();


  myData: any
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['EmployeeName', 'EmployeePicture'];
  imageSrc = 'assets/images/miri.png'
  //@ViewChild('paginator', { static: false }) paginator: MatPaginator;
  //@ViewChild(MatSort, { static: false }) sort: MatSort;
  ngOnInit() {
    this.geData()
  }

  geData() {
    this.readfileservice.getdata().subscribe(data => {

      this.myData = data['Employees']
      this.dataSource = new MatTableDataSource(this.myData);
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(this.myData);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      }, 0);
    })


  }

  onclickEmployee(row) {
    console.log(row);
    console.log(row['EmployeeName']);
    this.selectEmployee.emit(row['EmployeeName'])
  }
}
