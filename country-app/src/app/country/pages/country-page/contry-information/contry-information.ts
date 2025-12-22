import {Component, input} from '@angular/core';
import {Country} from '../../../interfaces/country.interface';

@Component({
  selector: 'contry-information',
  imports: [],
  templateUrl: './contry-information.html',
})
export class ContryInformation {
    contry=input.required<Country>();
}
