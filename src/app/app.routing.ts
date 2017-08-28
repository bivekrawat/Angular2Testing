import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'NotFound' }
];

export const routing = RouterModule.forRoot(appRoutes);
