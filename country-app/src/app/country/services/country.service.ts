import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RESTCountry} from '../interfaces/rest-countries.interfaces';
import {map, Observable, catchError, throwError, delay, of, tap} from 'rxjs';
import type {Country} from '../interfaces/country.interface';
import {CountryMapper} from '../mappers/country.mapper';
import {Region} from '../interfaces/region.type';

const  API_RUL ='https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http=inject(HttpClient);
  private queryCache= new Map<String,Country[]>();
  private queryCacheRegion=new Map<Region,Country[]>();
  searchBycapital(query:String):Observable<Country[]>{
    query=query.toLowerCase();
    if(this.queryCache.has(query)){
      return of(this.queryCache.get(query) ?? []);
    }
    console.log(`llegando al server ${query}`)

    return this.http.get<RESTCountry[]>(`${API_RUL}/capital/${query}`)
      .pipe(
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        tap(countries => this.queryCache.set(query,countries)),
        catchError(error =>{
            console.error('Error fetching countries by capital:', error);
            return throwError(
              ()=> new Error(`No se encontraron resultados para :${query}`)
            );
          })
        );
  } // Fin de searchBycapital
  private queryCacheCountry=new Map<String,Country[]>();
  searchByCountry(query:String):Observable<Country[]>{

    query=query.toLowerCase();
    const url =`${API_RUL}/name/${query}`;
    if (this.queryCacheCountry.has(query)){
      return of(this.queryCacheCountry.get(query) ?? []);
    }
    console.log(`llegando al server ${url}`);
    return this.http.get<RESTCountry[]>(url)
      .pipe(
        delay(2000),
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        tap(countries => this.queryCacheCountry.set(query,countries)),
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
    return this.http.get<RESTCountry[]>(url)
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
  }//fin de searchByAlphaCode

  searchByRegion(query:Region):Observable<Country[]>{
    //query=query.toLowerCase();
    const url =`${API_RUL}/region/${query}`;
    if (this.queryCacheRegion.has(query)){
      return of(this.queryCacheRegion.get(query) ?? []);
    }
    console.log(`llegando al server ${url}`);
    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(restCountries=> CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        tap(countries => this.queryCacheRegion.set(query,countries)),
        catchError(error =>{
          console.error('Error fetching countries by name:', error);
          return throwError(()=>{
            new Error(`No se encontraron resultados para :${query}`);
          })
        })
      );
  }
}
