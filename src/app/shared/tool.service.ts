import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  readonly apiUrl = "http://test9.abt.ro/api"

  list: Tool[];

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl+"/tools").toPromise().then(tl => this.list = tl as Tool[]);
  }

  postTool(tl:Tool){
    const body = {
        name: tl.name,
        value: tl.value,
        status: tl.status
    }
    
    return this.http.post(this.apiUrl + "/tools", body);
  }
}
