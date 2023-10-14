import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Anastasis";
  lastname = "Papargyropoulos";

  person: Person = {
    givenName: 'Anastasis',
    surname: 'Papargyropoulos',
    age: 32,
    email: 'anpap@hotmail.com',
    address: 'Athens, Greece'
  };

  person2: Person = {
    givenName: 'Giorgos',
    surname: 'Chatzidimitrakopoulos',
    age: 22,
    email: 'chtdim@hotmail.com',
    address: 'Athens, Greece'
  };
}
