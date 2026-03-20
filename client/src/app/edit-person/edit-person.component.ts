import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person: any = {};
  id: string = '';

  constructor(
    private service: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getPeople().subscribe((data: any[]) => {
      this.person = data.find(p => p._id === this.id);
    });
  }

  updatePerson() {
    this.service.updatePerson(this.id, this.person).subscribe(() => {
      alert('Person updated');
      this.router.navigate(['/']);
    });
  }
}