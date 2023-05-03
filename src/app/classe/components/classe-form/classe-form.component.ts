import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Classe } from '../../models/classe';
import { ClasseService } from '../../services/classe.service';

export interface ClasseFormData {
  isCreateForm: boolean;
  classe: Classe;
}

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.sass']
})
export class ClasseFormComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  classes: string[] = [
    'LP-DIM-FI',
    'LP-DIM-APP'
  ];

  classeForm = this.fb.group({
    id: [0, [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    class: ['', [Validators.required]],
    email: ['', [Validators.email]],
    dateOfBirth: ['', [Validators.required]]
  });

  constructor(public dialogRef: MatDialogRef<ClasseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClasseFormData, private fb: FormBuilder,
    private classeService : ClasseService, private _snackBar: MatSnackBar) {

      if(!data.isCreateForm){
        this.setClasseForm(data.classe);
      }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setClasseForm(classe: Classe) {
    this.classeForm.setValue({
      id: classe.id,
      name: classe.name,
      role1: classe.role1,
      role2: classe.role2,
      role3: classe.role3,
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
    if(this.classeForm.valid){
      if(this.data.isCreateForm){
        this.classeForm.value.id = Date.now() + Math.random();
        this.classeService.create(this.classeForm.value as Classe)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.classeService.update(this.classeForm.value as Classe)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
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
