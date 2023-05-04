import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortComponent } from './sort.component';
import { SharedModule } from '../shared/shared.module';
import { SortRoutingModule } from './sort-routing.module';
import { SortListComponent } from './pages/sort-list/sort-list.component';
import { SortFormComponent } from './components/sort-form/sort-form.component';
import { SortDetailsComponent } from './pages/sort-details/sort-details.component';
import { SortCardComponent } from './components/sort-card/sort-card.component';



@NgModule({
  declarations: [
    SortComponent,
    SortListComponent,
    SortFormComponent,
    SortDetailsComponent,
    SortCardComponent,
  ],
  imports: [
    CommonModule,
    SortRoutingModule,
    SharedModule,
  ]
})
export class ClasseModule { }
