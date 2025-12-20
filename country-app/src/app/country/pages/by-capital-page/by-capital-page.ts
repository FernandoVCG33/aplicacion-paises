import { Component } from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {List} from '../../components/list/list';

@Component({
  selector: 'app-by-capital-page',
  imports: [
    SearchInput,
    List
  ],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {

}
