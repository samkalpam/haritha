import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleComponent } from './people.component';
import { OwnerComponent } from './owner/owner.component';
import { TenantComponent } from './tenant/tenant.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PeopleComponent,
                children: [
                    {
                        path: 'owner',
                        component: OwnerComponent
                    },
                    {
                        path: 'tenant',
                        component: TenantComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PeopleRoutingModule {}