import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/shared/tool.service';
import { Tool } from 'src/app/shared/tool.model';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-tool-list2',
  templateUrl: './tool-list2.component.html',
  styles: []
})
export class ToolList2Component implements OnInit {

  //tools: Tool[];
  //subscription: Subscription;
  tableResource: DataTableResource<Tool>;
  items: Tool[] = [];
  itemCount: number; 

  constructor(private toolService: ToolService) { 
    toolService.getAll();
    this.initializeTable(this.toolService.toolList);
  }

  ngOnInit() {
  }

  private initializeTable(tools: Tool[]) {
    this.tableResource = new DataTableResource(tools);

    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    
      this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);    
  }

}
