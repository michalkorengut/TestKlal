import { Component, Input, OnInit } from '@angular/core';
import { ReadfileService } from '../services/readfile.service';

@Component({
  selector: 'app-display-departments',
  templateUrl: './display-departments.component.html',
  styleUrls: ['./display-departments.component.scss']
})
export class DisplayDepartmentsComponent implements OnInit {
  //_deptId:number;
 dept:any;
 openList:boolean=false;
  @Input() set deptId  (value:number)
  {
  
    if(this.dept==null||value!=this.dept.DepartmentID)
    {
      
      this.getChildrenList(value)
    }
   
  }
  


  constructor(   private readfileservice: ReadfileService) { }

  ngOnInit() {
  }

  changeListView():void
  {
    debugger;
    this.openList=true;
  }
  getChildrenList(deptId:number)
  {
  this.readfileservice.getDepartment(deptId).subscribe(data=> this.dept= data)
  }
}
