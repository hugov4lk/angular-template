import {UsersTableService} from "./users-table.service";
import {Injectable} from "@angular/core";
import {AbstractTableDatasource} from "../abstract-table/abstract-table.datasource";
import {UsersTableItem} from "./users-table-item.interface";

@Injectable()
export class UsersTableDataSource extends AbstractTableDatasource<UsersTableItem> {
  constructor(service: UsersTableService) {
    super(service);
  }
}

