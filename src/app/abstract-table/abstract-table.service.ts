import {Sort} from "@angular/material/sort";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbstractTableItem} from "./abstract-table-item.interface";

@Injectable()
export abstract class AbstractTableService<T = AbstractTableItem[]> {
  constructor(private http: HttpClient) {
  }

  abstract path: string;

  fetch(find: string | null, sort: Sort): Observable<T> {
    let params = new HttpParams();
    if (find != null) {
      params = params.set('find', find);
    }
    params = params.set('sort', sort.active + ":" + sort.direction)

    return this.http.get<T>(`http://localhost:8080/${this.path}`, {params});
  }
}
