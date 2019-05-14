import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(userInfo=>{
      this.user=userInfo;
      console.log(this.user)
    })
    
  }

  loginGoogle(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
