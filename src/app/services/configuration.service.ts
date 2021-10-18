import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ipConfig } from './../types/ip-config';
import {  settingsConfig } from './../types/settings-config';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: ipConfig;

  settingConfig: settingsConfig;
  constructor(
    private http: HttpClient) {

  }

  initConfiguration(path): Promise<any> {
   let d= '2020-09-03'
  // path=`${path}${d}`
    return combineLatest(

      this.http.get<ipConfig>(`${path}/ipConfig.json`),
      this.http.get<settingsConfig>(`${path}/settingsConfig.json`)
    ).pipe(
      tap(response => [this.ips, this.settingConfig] = response),
    ).toPromise();
  }
  getIpConfig(){
    return this.ips
  }
}
