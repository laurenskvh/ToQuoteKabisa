import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

    randomNumber: number;
    endpoint = 'http://quotes.stormconsultancy.co.uk/quotes/';

    /*
     * Quote service, establishes connection
     * quote API and contains fetching methods.
     */
    constructor(private _http: Http) { }

    /*
     * Fetch a single quote through an ID (number)
     * return value is an Observable<Response>.
     */
    getSingleQuote(id: number): any {
        return this._http
            .get(this.endpoint + id + '.json');
    }

    /*
     * Generate a random number to fetch a
     * random quote. Quote API only has 40
     * quotes. Returns Observable<Response>.
     */
    getRandomQuote(): any {
        this.randomNumber = this.getRandomInt(1, 40);

        return this._http.get(this.endpoint + this.randomNumber + '.json');
    }

    /*
     * Randomize function.
     */
    getRandomInt(min, max): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
