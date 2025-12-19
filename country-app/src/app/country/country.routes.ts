import {Routes} from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import {CountryLayout} from './layouts/country-layout/country-layout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path:'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ],
  },
  //{
  //path:'country',

  //},

];
export default countryRoutes;
