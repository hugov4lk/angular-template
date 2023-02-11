import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersTableComponent} from "./users-table/users-table.component";
import {CarsTableComponent} from "./cars-table/cars-table.component";

const routes: Routes = [
  {path: 'users', component: UsersTableComponent},
  {path: 'cars', component: CarsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
