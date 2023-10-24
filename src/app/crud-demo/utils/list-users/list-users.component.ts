import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Person[] = []
  constructor(private appService:AppService = Inject(AppService)) {}
  // to inject the service

  // i oninit einai i method pou tha ektelestei otan teleiwsei o constructor
  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
    })
  }
}
