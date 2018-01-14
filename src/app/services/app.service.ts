import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private userLoggedIn: boolean;

  constructor(){

  }

	//setter userLoggedIn
	public setIsUserLoggedIn(value: boolean) {
    console.log("appservice - setIsUserLoggedIn");
		this.userLoggedIn = value;
	}

	//getter userLoggedIn
	public getIsUserLoggedIn() {
    console.log("appservice - getIsUserLoggedIn");
		return this.userLoggedIn;
	}

}
