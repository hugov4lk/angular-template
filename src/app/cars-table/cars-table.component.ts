import {Component} from '@angular/core';
import {CarsTableDatasource} from './cars-table.datasource';
import {CarsTableService} from "./cars-table.service";
import {AbstractTableComponent} from "../abstract-table/abstract-table.component";

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['../abstract-table/abstract-table.component.css']
})

export class CarsTableComponent extends AbstractTableComponent {
  dataSource = new CarsTableDatasource(this.carsService);
  displayedColumns: string[] = ['id', 'make', 'model', 'numberplate'];

  constructor(private carsService: CarsTableService) {
    super();
  }
}
