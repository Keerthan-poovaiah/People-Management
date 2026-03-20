import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  people: any[] = [];

  constructor(private service: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.service.getPeople().subscribe((data: any) => {
      this.people = data;
    });
  }

  deletePerson(id: string) {
    this.service.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(p => p._id !== id);
    });
  }
}