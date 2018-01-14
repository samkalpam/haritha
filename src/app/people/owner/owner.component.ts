import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Owner } from './owner';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.less']
})
export class OwnerComponent implements OnInit {

  addEditOwnerForm : FormGroup;
  ownerFromValue: Date = new Date();
  ownerToValue: Date = new Date();
  tenantFromValue: Date = new Date();
  tenantToValue: Date = new Date();
  bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  ownerObject:Owner;
  showSearchOwner:boolean = false;
  showFormUI:boolean = false;
  isEditForm:boolean = false;

  constructor() {
    this.addEditOwnerForm = new FormGroup ({
      fname: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      phoneprefix:  new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]),
      email:new FormControl('', [Validators.required, Validators.email]),
      identification:new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(10)]),
      ownerFrom:new FormControl(new Date(), [Validators.required]),
      ownerTo:new FormControl('', Validators.minLength(2)),
      // tenantFrom:new FormControl(new Date(), Validators.minLength(2)),
      // tenantTo:new FormControl('', Validators.minLength(2))
    });
  }

  ngOnInit() {
  }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

  resetForm():void {
      this.addEditOwnerForm.reset();
  }

  searchForOwner():void{
    this.showSearchOwner = true;
    this.showFormUI = false;
    this.resetForm();
  }

  showOwnerForm():void{
    this.showFormUI = true;
  }

  getOwnerByPhoneNumber():void{
    this.showFormUI = true;
  }

}
