import {Component, inject, resource, signal} from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {List} from '../../components/list/list';
import {CountryService} from '../../services/country.service';
import {firstValueFrom, of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [
    SearchInput,
    List
  ],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryService = inject(CountryService);

  query = signal('');

  countryResourse=rxResource({
    params: () => ({query : this.query()}),
    stream: ({ params }) => {
      if(!params.query) return of([]);

      return this.countryService.searchByCountry(params.query)

    }
  });

}
