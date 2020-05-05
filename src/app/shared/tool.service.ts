import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tool } from './tool.model';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  readonly apiUrl = "http://test9.abt.ro/api"

  formData: Tool;
  toolList: Tool[];

  constructor(private http: HttpClient) { }

  postTool(tl:Tool){
    const body = {
        name: tl.name,
        value: tl.value,
        status: tl.status
    }
    
    return this.http.post(this.apiUrl + "/tools", body);
  } // C - create


  getAll(){    
    return this.http.get<Tool[]>(this.apiUrl+"/tools")
      .toPromise()
      .then(tl => this.toolList = tl as Tool[]);
  } // R - read


  putTool(tid: number, tool: Tool){
    const obj = { id: tid, name: tool.name, value: tool.value, status: tool.status }
    
    return this.http.put(this.apiUrl + "/tools/" + tid.toString(), obj);
  } // U - update


  deleteTool(id: number){
    alert(this.apiUrl + "/tools/" + id.toString());
    return this.http.delete(this.apiUrl + "/tools/" + id.toString());
  } // D - delete

  
  getTool(tid: number){
    return this.http.get<Tool>(this.apiUrl + '/tools/' + tid.toString());
  }


  getAllFakeData(){
    let fakeTools: Tool[] = [
      { id: 1, name: 'One', value: 2, status: 's1' },
      { id: 2, name: 'Two', value: 4, status: 's2' },
      { id: 3, name: 'Three', value: 6, status: 's3' },
      { id: 4, name: 'Four', value: 8, status: 's4' },
    ];

    const source  = of(fakeTools);
    return source;
  }
}
