import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FlatsComponent } from './flats.component';
import { RentAFlatComponent } from './rent-a-flat/rent-a-flat.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FlatsComponent,
                children: [
                    {
                        path: 'rent',
                        component: RentAFlatComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FlatsRoutingModule {}