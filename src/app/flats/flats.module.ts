import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';

import { FlatsComponent } from './flats.component';
import { RentAFlatComponent } from './rent-a-flat/rent-a-flat.component';
import { FlatsRoutingModule } from './flats.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FlatsRoutingModule
  ],
  declarations: [FlatsComponent, RentAFlatComponent]
})
export class FlatsModule { }
