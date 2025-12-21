import {RestCountry} from '../interfaces/rest-countries.interfaces';
import {Country} from '../interfaces/country.interface';

export  class CountryMapper {
  static mapeRestCountryToCountry(restCountry:RestCountry):Country{
    return {
      capital:restCountry.capital.join(','),
      cca2:restCountry.cca2,
      flag:restCountry.flag,
      flagSvg:restCountry.flags.svg,
      name:restCountry.translations['spa'].common ?? 'NO SE ENCONTRÓ NOMBRE',
      population:restCountry.population,
    }
  }
  static mapRestCountryArrayToCountryArray(restCountries:RestCountry[]):Country[]{
    return restCountries.map(this.mapeRestCountryToCountry);
  }
}
