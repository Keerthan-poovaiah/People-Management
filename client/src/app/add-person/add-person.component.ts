import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  person = {
    name: '',
    age: '',
    gender: '',
    mobile: ''
  };

  constructor(private service: PersonService) {}

  addPerson() {
    this.service.addPerson(this.person).subscribe(() => {
      alert('Person added successfully');

      this.person = {
        name: '',
        age: '',
        gender: '',
        mobile: ''
      };
    });
  }
}