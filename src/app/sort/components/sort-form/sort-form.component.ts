import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '../../models/sort';
import { SortService } from '../../services/sort.service';

export interface SortFormData {
  isCreateForm: boolean;
  sort: Sort;
}

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.sass']
})
export class SortFormComponent implements OnDestroy {

  sorts$: Observable<Sort[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  elements: string[] = [
    "Terre", "Neutre", "Feu", "Eau", "Air"
  ]

  sortForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    element: ['', [Validators.required]],
    degats: [0, [Validators.required]],
    coutpa: [0, [Validators.required]],
    portee: [0, [Validators.required]],
    critique: [0, [Validators.required]]
  });

  constructor(public dialogRef: MatDialogRef<SortFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SortFormData, private fb: FormBuilder,
    private sortService : SortService, private _snackBar: MatSnackBar) {

      if(!data.isCreateForm){
        this.setSortForm(data.sort);
      }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.sorts$ = this.sortService.get();
  }

  setSortForm(sort: Sort) {
    this.sortForm.setValue({
      id: sort.id,
      name: sort.name,
      element: sort.element,
      degats: sort.degats,
      coutpa: sort.coutpa,
      portee: sort.portee,
      critique: sort.critique
    });
  }

  get title(){
    if(this.data.isCreateForm){
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit(){
    if(this.sortForm.valid){
      if(this.data.isCreateForm){
        this.sortForm.value.id = Date.now() + Math.random();
        this.sortService
        .create(this.sortForm.value as Sort)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        console.log(this.sortForm.value as Sort)
        this.sortService
        .update(this.sortForm.value as Sort)
        .pipe(takeUntil(this.destroy$))
        .subscribe((result) => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }
}
