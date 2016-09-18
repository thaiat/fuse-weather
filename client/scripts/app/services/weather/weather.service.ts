import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://beta.randomapi.com/api/el3rc6as?key=2D3S-2MX2-EHXY-DDF6';
@Injectable()
export class Weather {
    constructor(private http: Http) {

    }

    get(): Observable<Array<any>> {
        return this.http.get(apiUrl)
            .map(res => {
                return res.json().results[0].times;
            });
    }
}
