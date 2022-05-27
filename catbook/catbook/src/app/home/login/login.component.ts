import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string ='';
  password:string='';

  constructor(private authenticationService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.authenticationService.authenticate(this.user,this.password).subscribe(()=>{
      this.router.navigate(['animals']);
    },(error)=>{
      alert("wrong user or password");
      console.log(error);
    }
    )
  }
}
