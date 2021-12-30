import { Component } from '@angular/core';

import { TaskService } from './services/task.service';
import { PersonaService } from './services/persona.service';
import { Persona } from './interfaces/persona';
import { Response } from './interfaces/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Persons';
  persons: Persona[];
  person: Persona;
  thatLooks: number = 0;
  response: Response;

  constructor(
    private taskService: TaskService, 
    private personaService: PersonaService
  )
  {
    this.persons = [];

    this.person = {
      id: 0,
      nombre: '-',
      apellido: '-',
      edad: 0
    };

    this.response = {
      statusCode: 0,
      description: '-'
    };

    this.getAllPersons();
  }
  
  getAllPersons() {
    this.personaService.getAllPersons().subscribe(persons => {
      this.persons = persons;
      this.thatLooks = 0;  // All people can be seen.
    })
  }

  getPerson() {
    this.personaService.getPerson().subscribe(person => {
      console.log(person);
      this.person = person;
      this.thatLooks = 1;  // The searched person is displayed.
    })
  }

  createPerson() {
    const newPerson = {
      nombre: 'Borrar',
      apellido: 'Borrar',
      edad: 41
    };
    
    this.thatLooks = 2;  // Person created.

    this.personaService.createPerson(newPerson).subscribe((data) => {
      this.response = data;
    })
  }

  updatePerson() {
    const updatePerson = {
      nombre: 'Eric',
      apellido: 'Pachon',
      edad: 21
    };

    this.thatLooks = 3;  // Person updated.

    this.personaService.updatePerson(updatePerson, 19).subscribe((data) => {
      this.response = data;
    })
  }

  deletePerson() {
    this.thatLooks = 4;  // Person eliminated.

    this.personaService.deletePerson(18).subscribe((data) => {
      this.response = data;
    });
  }
}
