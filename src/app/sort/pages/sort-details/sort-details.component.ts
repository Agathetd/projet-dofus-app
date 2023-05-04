import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Sort } from '../../models/sort';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort-details',
  templateUrl: './sort-details.component.html',
  styleUrls: ['./sort-details.component.sass']
})
export class SortDetailsComponent {
  sortId: number;
  sorts$: Observable<Sort>;

  constructor(private route: ActivatedRoute, private sortService: SortService, private location: Location){
    this.sortId = +this.route.snapshot.paramMap.get('id') ;
  }


  ngOnInit(): void {
    if(this.sortId){
      this.sorts$ = this.sortService.getById(this.sortId);
    }
  }

  goBack(){
    this.location.back();
  }

  showReceivedValue(value: boolean){
    console.log(value);
  }
}
