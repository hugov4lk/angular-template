import {CarsTableService} from "./cars-table.service";
import {Injectable} from "@angular/core";
import {AbstractTableDatasource} from "../abstract-table/abstract-table.datasource";
import {CarsTableItem} from "./cars-table-item.interface";

@Injectable()
export class CarsTableDatasource extends AbstractTableDatasource<CarsTableItem> {
  constructor(service: CarsTableService) {
    super(service);
  }
}

