import {RestCountry} from '../interfaces/rest-countries.interfaces';
import {Country} from '../interfaces/country.interface';

export  class CountryMapper {
  static mapeRestCountryToCountry(restCountry:RestCountry):Country{
    return {
      capital:restCountry.capital.join(','),
      cca2:restCountry.cca2,
      flag:restCountry.flags.png,
      flagSvg:restCountry.flags.svg,
      name:restCountry.name.common,
      population:restCountry.population,
    }
  }
  static mapRestCountryArrayToCountryArray(restCountries:RestCountry[]):Country[]{
    return restCountries.map(this.mapeRestCountryToCountry);
  }
}
