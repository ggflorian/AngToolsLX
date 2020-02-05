import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.css']
})

export class ToolFormComponent implements OnInit {

  tl: Tool;

  constructor(private ts:ToolService) { }
  
  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.tl = {
      name: '',
      value: 0,
      status: ''
    }
  }

  saveTool(frm: NgForm){
    this.ts.postTool(frm.value).subscribe( (dt:any) => {
      console.log(dt);
      if (dt.Succeeded)
      { 
        this.resetForm(frm)
        console.log("Yes Post");
      }
      else
        console.log("No Post");
    })
  }
}
