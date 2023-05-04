import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '../../models/sort';

@Component({
  selector: 'app-sort-card',
  templateUrl: './sort-card.component.html',
  styleUrls: ['./sort-card.component.sass']
})
export class SortCardComponent implements OnInit {

  @Input() selectedSort: Sort;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.selectedSort){
      this.received.emit(true);
    }
  }
}
