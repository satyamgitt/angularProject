import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})

export class LoginPageComponent implements OnInit {

  @Output() event = new EventEmitter<boolean>();

  constructor(private dataServ:DataServiceService) { }

  ngOnInit(): void {
    // this.dataServ.vari1.next('hello')
  }

  email = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl("", [
    Validators.required,
    Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
  ]);


  loginForm = new FormGroup(
    {
      email!: this.email,
      password!: this.password
    });

  loginUser() {
   if(this.loginForm.status === "INVALID"){
    return
  }

  let login = true;
  this.event.emit(login)
    
  }


  
  
}


