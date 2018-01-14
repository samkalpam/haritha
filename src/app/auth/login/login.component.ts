import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private router: Router;

  constructor(private appService:AppService) {
    
  }

  ngOnInit() {
  }

  login(){
    console.log("came to LoginComponent : login");
    this.appService.setIsUserLoggedIn(true);
  }

}
