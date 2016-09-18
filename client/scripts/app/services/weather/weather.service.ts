import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const url = 'http://beta.randomapi.com/api/c56bd01ee1ecc83c1ec5ee5c37c09770';

@Injectable()
export class Weather {

    constructor(private http: Http) {

    }
    get() {
        return this.http.get(url)
            .subscribe(res => {
                return res.json().results[0].times;
            });
    }

}
