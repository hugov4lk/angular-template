import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CarsTableComponent} from './cars-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {CarsTableService} from './cars-table.service';
import {CarsTableDatasource} from './cars-table.datasource';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule, MatInputModule],
  declarations: [CarsTableComponent],
  exports: [CarsTableComponent],
  providers: [CarsTableService, CarsTableDatasource],
})
export class CarsTableModule {
}
