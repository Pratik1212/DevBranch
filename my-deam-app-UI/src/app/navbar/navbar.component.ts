import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
    templateUrl: 'navbar.component.html',
    selector:'nav-bar'
})
export class NavBarComponent implements OnInit {
currentUser: User;
    constructor(private router: Router, private userservice: UserService, private authenticationService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.authenticationService.isAuthoriseUser();
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['login']);
        this.currentUser = null;
    }
}
