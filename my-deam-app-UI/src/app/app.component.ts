import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from './_services';
import { User } from './_models';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit  {
    currentUser: User;
    constructor(private userservice: UserService, private authenticationService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
