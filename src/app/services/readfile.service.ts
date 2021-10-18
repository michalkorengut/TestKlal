import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ReadfileService {

    constructor(private http: HttpClient, private ConfigurationService: ConfigurationService) {
      
    }

    public getdata(): Observable<any> {
        
        return this.http.get('./assets/allData.json');
    }
    public getDepartment(deptId:number):Observable<any>
    {
        
        return this.http.get('./assets/allData.json').pipe(
            map(data=>{
                //סינון רק נמחלקות מהדף
                let allDept=(data["Departments"]as Array<any>)
                debugger;
                //סינון האבא
            let dept=allDept.find(x=>x.DepartmentID==deptId);
            if(dept){
            debugger;
                dept.childrenList= allDept.filter(x=>x.ParentID ==deptId);
            }
            return dept;
        })
            
        );

    }

}


















