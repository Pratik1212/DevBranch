import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { CandidateListComponent } from './candidate-list';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { EditProfileComponent, ViewProfileComponent } from './profile/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'grooms', component: CandidateListComponent, canActivate: [AuthGuard] },
    { path: 'brides', component: CandidateListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/:id/edit', component: EditProfileComponent},
    { path: 'profile/:id/view', component: ViewProfileComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
