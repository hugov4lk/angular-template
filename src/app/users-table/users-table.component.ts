import {Component} from '@angular/core';
import {UsersTableDataSource} from './users-table.datasource';
import {UsersTableService} from "./users-table.service";
import {AbstractTableComponent} from "../abstract-table/abstract-table.component";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['../abstract-table/abstract-table.component.css']
})

export class UsersTableComponent extends AbstractTableComponent {
  dataSource = new UsersTableDataSource(this.usersService);
  displayedColumns: string[] = ['id', 'name'];

  constructor(private usersService: UsersTableService) {
    super();
  }
}
