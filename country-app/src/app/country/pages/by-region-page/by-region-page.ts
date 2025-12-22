import { Component } from '@angular/core';
import {List} from '../../components/list/list';

import {Region} from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  imports: [
    List,
  ],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];
}
