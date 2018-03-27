import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { User } from './User';

@Injectable()
export class HttpService {

    constructor( private http: HttpClient ) { }

    getFactorial( num: number ) {
        const params = new HttpParams().set( 'number', num.toString() );
        return this.http.get( '/factorial', { params } );
    }

    sendUser( user: User ) {
//        const body = { name: user.name, age: user.age }; // можно так и отправлять body
        const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
        return this.http.post('user', user, {headers:myHeaders});
    }
}