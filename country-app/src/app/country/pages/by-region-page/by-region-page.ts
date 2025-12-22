import { Component } from '@angular/core';
import {List} from '../../components/list/list';
import {BotonsRegion} from '../../components/botons-region/botons-region';

@Component({
  selector: 'app-by-region-page',
  imports: [
    List,
    BotonsRegion
  ],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {

}
