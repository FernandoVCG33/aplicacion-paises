import { Component, inject , resource , signal } from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {List} from '../../components/list/list';
import {CountryService} from '../../services/country.service';

import {firstValueFrom} from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInput, List ], // <--- Agregamos módulos necesarios
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  query = signal('');

  countryResourse=resource({
    params: () => ({query : this.query()}),
    loader: async ({ params }) => {
      if(!params.query) return [];

      return  await  firstValueFrom(
        this.countryService.searchBycapital(params.query)
      )
    }
  });
}
