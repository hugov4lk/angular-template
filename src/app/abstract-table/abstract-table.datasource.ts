import {DataSource} from '@angular/cdk/collections';
import {Sort} from '@angular/material/sort';
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {AbstractTableItem} from "./abstract-table-item.interface";
import {AbstractTableService} from "./abstract-table.service";


@Injectable()
export abstract class AbstractTableDatasource<T = AbstractTableItem> extends DataSource<AbstractTableItem> {
  data$ = new BehaviorSubject<AbstractTableItem[]>([]);

  protected constructor(private service: AbstractTableService) {
    super();
  }

  connect(): Observable<AbstractTableItem[]> {
    return this.data$.asObservable();
  }

  disconnect(): void {
    this.data$.complete();
  }

  loadData(find: string | null, sort: Sort): void {
    this.service.fetch(find, sort).subscribe(data => {
        this.data$.next(data);
      }
    )
  }
}
