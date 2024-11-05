import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    {
      "givenName": "Anna",
      "surName": "Edwards",
      "email": "aedwards@hotmail.com",
      "age": 45,
      "address": "Churdan"
    },
    {
      "givenName": "Samantha",
      "surName": "Foster",
      "email": "s.foster64@ymail.com",
      "age": 46,
      "address": "Saint Ansgar"
    },
    {
      "givenName": "Jonathan",
      "surName": "Cook",
      "email": "j_a_cook@yahoo.com",
      "age": 56,
      "address": "Tigerton"
    },
    {
      "givenName": "Theodore",
      "surName": "Lee",
      "email": "theodorerlee@yahoo.com",
      "age": 46,
      "address": "Niles"
    },
    {
      "givenName": "Nicole",
      "surName": "Williams",
      "email": "n_williams@yahoo.com",
      "age": 49,
      "address": "Agate"
    },
    {
      "givenName": "Sebastian",
      "surName": "Allen",
      "email": "s_g_allen@yahoo.com",
      "age": 48,
      "address": "El Paso"
    }
  ]
}
