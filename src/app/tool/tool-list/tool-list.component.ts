import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';

declare let alertify: any;

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  
  constructor(public toolService: ToolService) { }

  ngOnInit() {
    this.toolService.getAll();
  }

  populateForm(tool: Tool){
    this.toolService.formData = Object.assign({}, tool);
    console.log(this.toolService.formData);
  }

  editTool() {

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
