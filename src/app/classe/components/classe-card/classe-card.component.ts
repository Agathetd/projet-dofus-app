import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classe } from '../../models/classe';

@Component({
  selector: 'app-classe-card',
  templateUrl: './classe-card.component.html',
  styleUrls: ['./classe-card.component.sass']
})
export class ClasseCardComponent implements OnInit {

  @Input() selectedClasse: Classe;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.selectedClasse){
      this.received.emit(true);
    }
  }
}
