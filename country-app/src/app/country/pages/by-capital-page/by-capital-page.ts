import {Component, inject, signal} from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {List} from '../../components/list/list';
import {CountryService} from '../../services/country.service';
import {Country} from '../../interfaces/country.interface';

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
  isLoading=signal(false);
  isError=signal<string|null>(null);
  countries=signal<Country[]>([]);

  onSearch(query:String){
    if(this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null)
    this.countryService.searchBycapital(query)
      .subscribe((country)=>{
      this.isLoading.set(false);
      this.countries.set(country);
      console.log(country);
      });
    }
}
