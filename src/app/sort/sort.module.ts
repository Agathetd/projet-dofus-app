import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { SortCardComponent } from './components/sort-card/sort-card.component';
import { SortFormComponent } from './components/sort-form/sort-form.component';
import { SortDetailsComponent } from './pages/sort-details/sort-details.component';
import { SortListComponent } from './pages/sort-list/sort-list.component';
import { SortService } from './services/sort.service';
import { SortRoutingModule } from './sort-routing.module';
import { SortComponent } from './sort.component';




@NgModule({
  declarations: [
    SortComponent,
    SortListComponent,
    SortFormComponent,
    SortCardComponent,
    SortDetailsComponent
  ],
  imports: [
    MatCardModule,
    SortRoutingModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    SortService
  ]
})
export class SortModule { }
