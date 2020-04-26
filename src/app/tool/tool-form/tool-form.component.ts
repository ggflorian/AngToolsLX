import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';
import { NgForm } from '@angular/forms';

declare let alertify: any;

@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})

export class ToolFormComponent implements OnInit {

  constructor(private ts: ToolService) { }
  
  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.ts.formData = {
      id: 0,
      name: '',
      value: 0,
      status: ''
    }
  }

  saveTool(frm: NgForm){
    let tid = this.ts.formData.id;
    if (tid == 0)
      this.insertRecord(frm);
    else 
      this.updateRecord(tid, frm);
  }

  insertRecord(frm: NgForm) {
    this.ts.postTool(frm.value).subscribe( 
      resp => {
        //console.log(resp); // tool fields
        this.resetForm(frm);
        this.ts.getAll();
        
        alertify.success(' Inserted successfully!');
      },
      err => {
        console.log(err);
      });
  }

  updateRecord(id:number, frm: NgForm) {
    this.ts.putTool(id, frm.value).subscribe( 
      resp => {
        //console.log(resp); // tool fields
        this.resetForm(frm);
        this.ts.getAll();

        alertify.success(' Updated successfully!');
      },
      err => {
        console.log(err);
      });
  }
}
