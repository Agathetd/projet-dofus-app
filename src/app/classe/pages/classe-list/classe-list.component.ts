import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Classe } from '../../models/classe';
import { ClasseService } from '../../services/classe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.sass']
})


export class MarqueListComponent {
  displayedColumns: string[] = [
    'name',
    'role1',
    'role2',
    'role3',
  ];
  classes$: Observable<Classe[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private classeService: ClasseService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.classes$ = this.classeService.get();
  }

  fetchData() {
    this.marques$ = this.marqueService.get();
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette marque ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.marqueService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }

  openClasseForm(classes?: Classe) {
    const dialogRef = this.dialog.open(ClasseFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: classes ? false : true,
        classes: classes ? classes : undefined
      }
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fetchData();
        }
      });
  }

  showMarqueDetails(classeId:number){
    this.router.navigate(['/classes/'+classeId]);
  }
}
