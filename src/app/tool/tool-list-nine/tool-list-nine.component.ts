import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/shared/tool.service';
import { Tool } from 'src/app/shared/tool.model';

declare let alertify: any;

@Component({
  selector: 'app-tool-list-nine',
  templateUrl: './tool-list-nine.component.html',
  styleUrls: ['./tool-list-nine.component.css']
})
export class ToolListNineComponent implements OnInit {

  data: any[];
  tool: Tool;

  constructor(public toolService: ToolService) { }

  ngOnInit() {
    this.toolService.getAll().then(res => {
      //console.log(res);
      this.data = res;
    });
  }

  populateForm(tid: number){
    //this.toolService.getTool(tid).subscribe(tl => this.tool = tl as Tool); // delay
    //this.toolService.formData = Object.assign({}, this.tool);

    this.toolService.getTool(tid).subscribe(tl => this.toolService.formData = Object.assign({}, tl as Tool))
  }

  deleteTool(id: number) {
    if (!confirm("Are you sure you want to delete this record?")) return;
    
    this.toolService.deleteTool(id).subscribe(
      resp => {
        this.toolService.getAll();
        alertify.success(' Deleted successfully!');
      },
      err => { 
        console.log(err); 
      }
    );
  }


}
