import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UsersTableComponent} from './users-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {UsersTableService} from './users-table.service';
import {UsersTableDataSource} from './users-table.datasource';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule, MatInputModule],
  declarations: [UsersTableComponent],
  exports: [UsersTableComponent],
  providers: [UsersTableService, UsersTableDataSource],
})
export class UsersTableModule {
}
