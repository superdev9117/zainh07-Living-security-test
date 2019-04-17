import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { MyFacts } from './my-facts.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyFactsService {
    private MyFacts: Promise<MyFacts>;
    public resourceUrl = SERVER_API_URL + 'api/fact';
    
    constructor(private http: HttpClient) {}

    public getAllFacts(): Observable<any> {
        return this.http.get(this.resourceUrl);
    }
}
