import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';
import {CountryService} from '../../services/country.service';
import {NotFound} from '../../../shared/components/not-found/not-found';

@Component({
  selector: 'app-country-page',
  imports: [
    NotFound
  ],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryCode= inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResourse=rxResource({
    params: () => ({code : this.countryCode}),
    stream: ({ params }) => {
      //if(!params.code) return of([]);

      return this.countryService.searchByAlphaCode(params.code)

    }
  });
}
