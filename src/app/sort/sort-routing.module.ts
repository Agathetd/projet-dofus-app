import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortComponent } from './sort.component';
import { SortDetailsComponent } from './pages/sort-details/sort-details.component';


const routes: Routes = [
  {
    path: '',
    component: SortComponent
  },
  {
    path: ':id',
    component: SortDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortRoutingModule { }
