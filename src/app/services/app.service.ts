import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private userLoggedIn: boolean;

  constructor(){

  }

	//setter userLoggedIn
	public setIsUserLoggedIn(value: boolean) {
		this.userLoggedIn = value;
	}

	//getter userLoggedIn
	public getIsUserLoggedIn() {
		return this.userLoggedIn;
	}

}
