import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', loadChildren: 'app/auth/auth.module#AuthModule'},
    {path: 'people', loadChildren: 'app/people/people.module#PeopleModule'},
    {path: 'flats', loadChildren: 'app/flats/flats.module#FlatsModule'},
    {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
    /*providers: [{
        provide: 'LoggedInGuard',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
    }]*/
})
export class AppRoutingModule {}