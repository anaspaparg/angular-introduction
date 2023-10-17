import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent,
     PersonAltComponent, EventBindComponent, OutputDemoComponent, 
     PersonCardComponent, TemplateDrivenFormComponent],
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

  users: Person[] = [
    {
      photoURL: 'https://i.pravatar.cc/?img=1',
      givenName: 'John',
      surname: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=2',
      givenName: 'Jane',
      surname: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=3',
      givenName: 'Jim',
      surname: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=4',
      givenName: 'Jill',
      surname: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=5',
      givenName: 'Jake',
      surname: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=6',
      givenName: 'Judy',
      surname: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=7',
      givenName: 'Jack',
      surname: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=8',
      givenName: 'Julie',
      surname: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=9',
      givenName: 'Jerry',
      surname: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    },
    {
      photoURL: 'https://i.pravatar.cc/?img=10',
      givenName: 'June',
      surname: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    },
  ];

  sentUser: Person | undefined

  onDeleteUser(i: number) {
    this.users.splice(i,1)
  };

  onSendUser(user: Person) {
    console.log(user);
    this.sentUser = user;
  };

  onNewPerson(person: Person) {
    this.users.push(person)
  }
}
