import {RESTCountry} from '../interfaces/rest-countries.interfaces';
import {Country} from '../interfaces/country.interface';

export  class CountryMapper {
  static mapeRestCountryToCountry(restCountry:RESTCountry):Country{
    return {
      capital:restCountry.capital?.join(','),
      cca2:restCountry.cca2,
      flag:restCountry.flag,
      flagSvg:restCountry.flags.svg,
      name:restCountry.translations['spa'].common ?? 'NO SE ENCONTRÓ NOMBRE',
      population:restCountry.population,
    }
  }
  static mapRestCountryArrayToCountryArray(restCountries:RESTCountry[]):Country[]{
    return restCountries.map(this.mapeRestCountryToCountry);
  }
}
