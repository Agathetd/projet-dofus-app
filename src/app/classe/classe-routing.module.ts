import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './classe.component';
import { ClasseDetailsComponent } from './pages/classe-details/classe-details.component';

const routes: Routes = [
  {
    path: '',
    component: ClasseComponent
  },
  {
    path: ':id',
    component: ClasseDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
