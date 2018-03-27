import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import { User } from './User';

@Component( {
    selector: 'app',
    template: `<div *ngIf="done">{{factorial}}</div>
                <div>
                    <label>Введите число:</label>
                    <input class="form-control" type="number" name="factorial" [(ngModel)]="num" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(num)">Отправить</button>
                </div>
                <hr>
                <div class="form-group">
                    <label for="">Имя:</label>
                    <input type="text" class="form-control" name="name" [(ngModel)]="user.name"/>
                </div>
                <div class="form-group">
                    <label for="">Возраст:</label>
                    <input type="number" class="form-control" name="name" [(ngModel)]="user.age"/>
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submitUser(user)">Отправить</button>
                </div>
                <div>
                    <h3>Получено от сервера:</h3>
                	<p>Имя: {{serverUser?.name}}</p>
                	<p>Возраст: {{serverUser?.age}}</p>
                </div> `,
    providers: [HttpService]
} )
export class AppComponent {

    user: User = new User();
    serverUser: User;

    factorial: number;
    done: boolean = false;
    constructor( private httpService: HttpService ) { }

    submit( num: number ) {
        this.httpService.getFactorial( num ).subscribe(( data: number ) => {
            this.factorial = data;
            this.done = true;
        } );
    }

    submitUser( user: User ) {
        this.httpService.sendUser( user ).subscribe(( data: User ) => {
            this.serverUser = data;
        }, error => console.log( error ) );
    }
}