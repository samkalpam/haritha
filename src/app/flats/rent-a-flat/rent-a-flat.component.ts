import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-a-flat',
  templateUrl: './rent-a-flat.component.html',
  styleUrls: ['./rent-a-flat.component.less']
})
export class RentAFlatComponent implements OnInit {

  constructor() { }

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  ngOnInit() {
  }

}
