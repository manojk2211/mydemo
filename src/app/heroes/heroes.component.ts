import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public message_service:MessageService) {   }
 
  hero_obj = {id:2, name:'manoj'};
  selectedHero : [];

  heroList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  

  onSelect(hero:any){
    this.selectedHero = hero;
  }

 
  empList = [
    { id: 1, name: 'manoj' },
    { id: 2, name: 'dipak' },
    { id: 3, name: 'ashok' },
    { id: 4, name: 'abc' },
    { id: 5, name: 'krishna' },
    { id: 6, name: 'rahul' },
  ];
selectEmp = [];

  onSelectEmp(emp1:any){
    debugger;
      this.selectEmp = emp1; 
      //alert(emp1.name);
      this.message_service.add('Heroservice: selected hero id ='+emp1.id );

  }

  ngOnInit() {
  }

}
