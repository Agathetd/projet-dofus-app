import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full'
  },
  {
    path: 'classes',
    loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule)
  },
  {
    path: 'sorts',
    loadChildren: () => import('./sort/sort.module').then(m => m.SortModule)
  },
  {
  path : '**',
  component: NotFoundComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
