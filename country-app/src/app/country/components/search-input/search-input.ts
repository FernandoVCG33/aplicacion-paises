import {Component,  EventEmitter ,input, Output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  @Output() value = new EventEmitter<string>();
  placeholder=input('Buscar');
}
