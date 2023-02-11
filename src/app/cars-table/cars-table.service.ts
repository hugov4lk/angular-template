import {AbstractTableService} from "../abstract-table/abstract-table.service";
import {CarsTableItem} from "./cars-table-item.interface";

export class CarsTableService extends AbstractTableService<CarsTableItem[]> {
  path = 'cars';
}
