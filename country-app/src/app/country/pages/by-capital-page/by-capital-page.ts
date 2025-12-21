import {Component, inject} from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {List} from '../../components/list/list';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [
    SearchInput,
    List
  ],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {
  countryService=inject(CountryService);

  onSearch(query:String){
    this.countryService.searchBycapital(query).subscribe(country=>{
      console.log(country);
      })
    }
}
