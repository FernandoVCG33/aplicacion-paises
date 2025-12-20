import { Component } from '@angular/core';

@Component({
  selector: 'search-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  onSearch(valor: string) {
    console.log({ valor });
  }
}
