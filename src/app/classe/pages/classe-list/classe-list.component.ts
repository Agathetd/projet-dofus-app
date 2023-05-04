import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Classe } from '../../models/classe';
import { ClasseService } from '../../services/classe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { ClasseFormComponent } from '../../components/classe-form/classe-form.component';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.sass']
})
export class ClasseListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'role1',
    'role2',
    'role3',
    'update',
    'delete'
  ];

  classes$: Observable<Classe[]>;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  constructor(private classeService: ClasseService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.classes$ = this.classeService.get();
  }

  openClasseForm(classe?: Classe) {
    const dialogRef = this.dialog.open(ClasseFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: classe ? false : true,
        classe: classe ? classe : undefined
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

  fetchData() {
    this.classes$ = this.classeService.get();
  }
  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette classe ?',
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
          this.classeService.delete(id)
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



  showClasseDetails(classeId:number){
    this.router.navigate(['/classes/'+classeId]);
  }
}
