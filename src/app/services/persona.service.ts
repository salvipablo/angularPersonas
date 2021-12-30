import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private api = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllPersons() {
    const path = `personas/traer`;
    return this.http.get<Persona[]>(path)
  }

  getPerson() {
    const path = `personas/traer/1`;
    return this.http.get<Persona>(path)
  }

  createPerson(person: Persona): Observable<any> {
    const path = `personas/crear`;
    return this.http.post(path, person);
  }

  updatePerson(person: Persona, id: number): Observable<any> {
    const path = `personas/editar/${id}?nombre=${person.nombre}&apellido=${person.apellido}&edad=${person.edad}`;
    return this.http.put<Task>(path, person);
  }

  deletePerson(id: number): Observable<any> {
    const path = `personas/borrar/${id}`;
    return this.http.delete(path);
  }
}
