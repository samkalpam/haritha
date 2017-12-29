import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';

import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people.routing.module';
import { OwnerComponent } from './owner/owner.component';
import { TenantComponent } from './tenant/tenant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    PeopleRoutingModule
  ],
  declarations: [PeopleComponent, OwnerComponent, TenantComponent]
})
export class PeopleModule { }
