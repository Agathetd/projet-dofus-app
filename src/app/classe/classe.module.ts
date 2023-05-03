import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe.component';
import { SharedModule } from '../shared/shared.module';
import ClasseListComponent from './pages/classe-list/classe-list.component';
import { ClasseFormComponent } from './components/classe-form/classe-form.component';


@NgModule({
  declarations: [
    ClasseComponent,
    ClasseListComponent,
    ClasseFormComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    SharedModule,
  ]
})
export class ClasseModule { }
