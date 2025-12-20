import {Component, output} from '@angular/core';

@Component({
  selector: 'search-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  value=output<String>();
}
