import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  readonly apiUrl = "http://test9.abt.ro"

  constructor(private http: HttpClient) { }

  postTool(tl:Tool){
    const body = {
        name: tl.name,
        value: tl.value,
        status: tl.status
    }

    console.log(body);
    
    return this.http.post(this.apiUrl + "/api/tools", body);
  }
}
