import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Classe } from '../../models/classe';

@Component({
  selector: 'app-classe-card',
  templateUrl: './classe-card.component.html',
  styleUrls: ['./classe-card.component.sass']
})
export class ClasseCardComponent {
  @Input() selectedClasse: Classe;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }
}
