import { Route } from '@angular/router';

import { MyFactsComponent } from './my-facts.component';

export const myFactsRoute: Route = {
   path: 'favourite-facts',
    component: MyFactsComponent,
    data: {
        authorities: [],
        pageTitle: 'Favourite Facts'
    },
};
