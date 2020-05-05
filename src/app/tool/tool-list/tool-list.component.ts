import { Component, OnInit, ViewChild } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';

declare let alertify: any;

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  tools: Tool[];
  filteredToolList: Tool[];

  constructor(public toolService: ToolService) {
    //this.toolService.getAllFakeData().subscribe(res => this.filteredToolList = this.tools = res); 
    
    //this.toolService.getAll().then(res => this.filteredToolList = this.tools = res);

    //this.toolService.getAllObs().subscribe(res => this.filteredToolList = this.tools = res);
  }

  ngOnInit() {
    this.toolService.getAll();
  }

  populateForm(tool: Tool){
    this.toolService.formData = Object.assign({}, tool);
  }

  filterData(query: string) {
    this.filteredToolList = (query) ? this.tools.filter(t => t.name.toLowerCase().includes(query.toLowerCase())) : this.tools;
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
