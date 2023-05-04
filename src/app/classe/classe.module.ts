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
import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseDetailsComponent } from './pages/classe-details/classe-details.component';
import { ClasseComponent } from './classe.component';
import { ClasseFormComponent } from './components/classe-form/classe-form.component';
import { ClasseListComponent } from './pages/classe-list/classe-list.component';
import { ClasseService } from './services/classe.service';
import { ClasseCardComponent } from './components/classe-card/classe-card.component';



@NgModule({
  declarations: [
    ClasseComponent,
    ClasseListComponent,
    ClasseFormComponent,
    ClasseCardComponent,
    ClasseDetailsComponent
  ],
  imports: [
    MatCardModule,
    ClasseRoutingModule,
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
    ClasseService
  ]
})
export class ClasseModule { }
