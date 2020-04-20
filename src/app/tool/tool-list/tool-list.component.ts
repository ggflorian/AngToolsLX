import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/tool.model';
import { ToolService } from 'src/app/shared/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  
  constructor(private toolService: ToolService) { }

  ngOnInit() {
    this.toolService.getAll();
  }

}
