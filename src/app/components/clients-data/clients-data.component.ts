import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-clients-data',
  templateUrl: './clients-data.component.html',
  styleUrls: ['./clients-data.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ClientsDataComponent implements OnInit {
  public Data = [
    {
      name: 'Eric Sanderson',
      location: 'Carlisle, PA',
      imgSrc: ''
    },
    {
      name: 'isac, Lambert',
      location: 'Los Angles, CA',
      imgSrc: ''
    },
    {
      name: 'Colin Morgan',
      location: 'Carlisle, PA',
      imgSrc: ''
    },
    {
      name: 'Nelson, Scott',
      location: 'Los Angles, CA',
      imgSrc: ''
    },
    {
      name: 'Sean, Lewis',
      location: 'Los Angles, CA',
      imgSrc: ''
    }
  ]
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  clientsData = [];
  pageSize = 2;
  clinetNm: string;
  constructor() { }
  ngOnInit() {
    this.clientsData = this.Data.slice(0, this.pageSize);
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.clientsData = this.Data.slice(firstCut, secondCut);
  }

  searchCLient() {
    if (this.clinetNm) {
      const client = this.Data.find(item => (item.name).toLowerCase().indexOf(this.clinetNm));
      this.clientsData = [];
      if (client) {
        this.clientsData.push(client);
      }
    } else {
      this.clientsData = this.Data.slice(0, this.pageSize);
    }
  }

}
