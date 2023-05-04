import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { SortService } from '../../services/sort.service';
import { SortFormComponent } from '../../components/sort-form/sort-form.component';
import { Sort } from '../../models/sort';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.sass']
})
export class SortListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'element',
    'degats',
    'coutpa',
    'portee',
    'critique',
    'update',
    'delete'
  ];

  sorts$: Observable<Sort[]>;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  constructor(private sortService: SortService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.sorts$ = this.sortService.get();
  }

  openSortForm(sort?: Sort) {
    const dialogRef = this.dialog.open(SortFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: sort ? false : true,
        sort: sort ? sort : undefined
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
    this.sorts$ = this.sortService.get();
  }
  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer ce sort ?',
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
          this.sortService.delete(id)
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



  showSortDetails(sortId:number){
    this.router.navigate(['/sorts/'+sortId]);
  }
}
