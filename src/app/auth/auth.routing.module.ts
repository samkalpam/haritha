import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AuthComponent,
                children: [
                    {
                        path: '',
                        component: LoginComponent
                    },
                    {
                        path: 'forgotpassword',
                        component: ForgotPasswordComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}