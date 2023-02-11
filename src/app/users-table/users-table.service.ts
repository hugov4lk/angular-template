import {AbstractTableService} from "../abstract-table/abstract-table.service";
import {UsersTableItem} from "./users-table-item.interface";

export class UsersTableService extends AbstractTableService<UsersTableItem[]> {
  path = 'users';
}
