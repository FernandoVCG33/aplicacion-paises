import { inject,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestCountry} from '../interfaces/rest-countries.interfaces';
import {map, Observable, catchError, throwError, delay} from 'rxjs';
import type {Country} from '../interfaces/country.interface';
import {CountryMapper} from '../mappers/country.mapper';

const  API_RUL ='https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http=inject(HttpClient);
  searchBycapital(query:String):Observable<Country[]>{
    query=query.toLowerCase();
    return this.http.get<RestCountry[]>(`${API_RUL}/capital/${query}`)
      .pipe(
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
          catchError(error =>{
            console.error('Error fetching countries by capital:', error);
            return throwError(()=>{
              new Error(`No se encontraron resultados para :${query}`);
            })
          })
      );
  } // Fin de searchBycapital
  searchByCountry(query:String):Observable<Country[]>{
    query=query.toLowerCase();
    const url =`${API_RUL}/name/${query}`;
    return this.http.get<RestCountry[]>(url)
      .pipe(
        delay(2000),
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        catchError(error =>{
          console.error('Error fetching countries by name:', error);
          return throwError(()=>{
            new Error(`No se encontraron resultados para :${query}`);
          })
        })
      );
  }
  //searchByAlphaCode
  searchByAlphaCode(code:String){
    const url =`${API_RUL}/name/${code}`;
    return this.http.get<RestCountry[]>(url)
      .pipe(
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        map( countries => countries.at(0) ),
        catchError(error =>{
          console.error('Error fetching countries by name:', error);
          return throwError(()=>{
            new Error(`No se encontraron resultados para ese codifo :${code}`);
          })
        })
      );
  }
}
