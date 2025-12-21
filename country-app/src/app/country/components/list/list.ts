import {Component, input} from '@angular/core';
import {RestCountry} from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'search-list',
  imports: [],
  templateUrl: './list.html',
})
export class List {
  countries=input.required<RestCountry[]>();
}
