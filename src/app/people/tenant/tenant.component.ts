import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Tenant } from './tenant';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.less']
})
export class TenantComponent implements OnInit {

  addEditTenantForm : FormGroup;
  tenantFromValue: Date = new Date();
  tenantToValue: Date = new Date();
  bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  tenantObject:Tenant;
  showSearchTenant:boolean = false;
  showFormUI:boolean = false;
  isEditForm:boolean = false;

  constructor() {
    this.addEditTenantForm = new FormGroup ({
      fname: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      phoneprefix:  new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]),
      email:new FormControl('', [Validators.required, Validators.email]),
      identification:new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]),
      tenantFrom:new FormControl(new Date(), Validators.minLength(2)),
      tenantTo:new FormControl('', Validators.minLength(2))
    });
  }

  ngOnInit() {
  }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

  resetForm():void {
      this.addEditTenantForm.reset();
  }

  searchForTenant():void{
    this.showSearchTenant = true;
    this.showFormUI = false;
    this.resetForm();
  }

  showTenantForm():void{
    this.showFormUI = true;
  }

  getTenantByPhoneNumber():void{
    this.showFormUI = true;
  }

}
