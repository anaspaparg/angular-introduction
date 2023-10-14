import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
    givenName: 'Alice',
    surname: 'W.',
    age: 25,
    email: 'alice.w@hotmail.com',
    address: 'Kavala, Greece'
  }
  
}
