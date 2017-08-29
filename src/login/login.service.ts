import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    constructor(protected _http: Http) { }

    _headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    url = 'https://reqres.in/api/login';

    login(data: any) {

        return this._http.post(
            this.url,
            data,
            this._headers).
            map((response: Response) => {
                const user = response.json();
                console.log(response);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
        // .subscribe(Response => console.log(Response))
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
