import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;

@Component({
  selector: 'app-tool-list-dt',
  templateUrl: './tool-list-dt.component.html',
  styleUrls: ['./tool-list-dt.component.css']
})

export class ToolListDtComponent implements OnInit {
  
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  dtOptions: any = {};
  constructor(){
  }

  ngOnInit(): void {

    this.dtOptions = {
      "pageLength": 5, 
      "lengthChange": false,
      "paging": true,
      "language": {
        "info": "Afisare: _START_ => _END_ din _TOTAL_ intrari",
        "lengthMenu": "Afisare _MENU_ intrari",
        "infoFiltered": " ( filtrate din _MAX_ inregistrari totale )",
        "search": "Cautare: ",
        "emptyTable": "<br /> INCARCARE - VA RUGAM ASTEPTATI <br /><br /> <!-- <br />Nicio societate adusa din baza. <br />Va rugam <b>Reincarcati</b> pagina web.<br /> -->",
        "paginate": {
            "first": "Primul",
            "last": "Ultimul",
            "next": "Urmator",
            "previous": "Anterior"
        },
      },
      "sPaginationType": "full_numbers",
      "iDisplayStart": 5,
      "ordering": true,
      "info": false
    }

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
  }

}
