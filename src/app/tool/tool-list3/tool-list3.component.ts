import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

import persons from './dt-data'

@Component({
  selector: 'app-tool-list3',
  providers: [],
  templateUrl: './tool-list3.component.html',
  styleUrls: ['./tool-list3.component.css']
})
export class ToolList3Component {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;

  constructor() {
      this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:

  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }

}
