import {AbstractTableItem} from "../abstract-table/abstract-table-item.interface";

export interface CarsTableItem extends AbstractTableItem {
  make: string;
  model: string;
  numberplate: string;
}
