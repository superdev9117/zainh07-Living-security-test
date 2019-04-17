import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { DashboardFacts } from './dashboard.facts.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private infoUrl = 'https://api.chucknorris.io/jokes/search?query=track';
    private DashboardFacts: Promise<DashboardFacts>;
    public resourceUrl = SERVER_API_URL + 'api/fact';
    
    constructor(private http: HttpClient) {}

    getDashboardFacts(): Promise<DashboardFacts> {
        if (!this.DashboardFacts) {
            this.DashboardFacts = this.http
                .get<DashboardFacts>(this.infoUrl, { observe: 'response' })
                .pipe(
                    map((res: HttpResponse<DashboardFacts>) => {
                        return res.body;
                    })
                )
                .toPromise();
        }
        return this.DashboardFacts;
    }
    
    addRemoveFavouriteFact(factId: string): Observable<HttpResponse<any>> {
        return this.http.get(`${this.resourceUrl}/${factId}`, { observe: 'response' });
    }

    getAllFacts(): Observable<any> {
        return this.http.get(this.resourceUrl);
    }
    // authorities(): Observable<string[]> {
    //     return this.http.get<string[]>(SERVER_API_URL + 'api/users/authorities');
    // }

}
