import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tool } from './tool.model';

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
    return this.http.get(this.apiUrl+"/tools")
      .toPromise()
      .then(tl => this.toolList = tl as Tool[]);
  } // R - read


  putTool(id: number, tool: Tool){
    return this.http.put(this.apiUrl + "/tools/" + this.formData.id, tool);
  } // U - update


  deleteTool(id: number){
    return this.http.delete(this.apiUrl + "/tools" + id.toString());
  } // D - delete
  
}
