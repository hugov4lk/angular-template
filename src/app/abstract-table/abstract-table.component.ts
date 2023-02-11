import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material/sort';

@Component({
  template: ''
})

export abstract class AbstractTableComponent implements OnInit {
  abstract dataSource: any;
  abstract displayedColumns: string[];
  currentSort: Sort = {active: 'id', direction: 'asc'};

  ngOnInit(): void {
    this.dataSource.loadData(null, this.currentSort);
  }

  filter(find: Event): void {
    const filterValue = (find.target as HTMLInputElement).value;
    this.dataSource.loadData(filterValue, this.currentSort);
  }

  sort(sort: Sort): void {
    this.currentSort = sort;
    this.dataSource.loadData(null, sort);
  }
}
