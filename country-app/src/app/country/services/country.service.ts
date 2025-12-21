import { inject,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const  API_RUL ='https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http=inject(HttpClient);
  searchBycapital(query:String){
    query=query.toLowerCase();
    return this.http.get(`${API_RUL}/capital/${query}`);
  }

}
