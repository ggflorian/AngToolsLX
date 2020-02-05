import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fool-form',
  templateUrl: './fool-form.component.html',
  styleUrls: ['./fool-form.component.css']
})
export class FoolFormComponent implements OnInit {

  tool: Tool;

  constructor(private ts:ToolService) { }
  
  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.tool = {
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
