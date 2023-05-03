import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe.component';
import { SharedModule } from '../shared/shared.module';
import {ClasseListComponent} from './pages/classe-list/classe-list.component';
import { ClasseFormComponent } from './components/classe-form/classe-form.component';
import { ClasseDetailsComponent } from './pages/classe-details/classe-details.component';
import { ClasseCardComponent } from './components/classe-card/classe-card.component';


@NgModule({
  declarations: [
    ClasseComponent,
    ClasseListComponent,
    ClasseFormComponent,
    ClasseDetailsComponent,
    ClasseCardComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    SharedModule,
  ]
})
export class ClasseModule { }
