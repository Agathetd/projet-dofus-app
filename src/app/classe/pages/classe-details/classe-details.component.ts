import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Classe } from '../../models/classe';
import { ClasseService } from '../../services/classe.service';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.sass']
})
export class ClasseDetailsComponent implements OnInit {
  classeId: number;
  classes$: Observable<Classe>;

  constructor(private route: ActivatedRoute, private classeService: ClasseService, private location: Location){
    const id = this.route.snapshot.paramMap?.get('id');
    this.classeId = id ? +id : 0;
  }

  ngOnInit(): void {
    if(this.classeId){
      this.classes$ = this.classeService.getById(this.classeId);
    }
  }

  goBack(){
    this.location.back();
  }

  showReceivedValue(value: boolean){
    console.log(value);
  }
}
