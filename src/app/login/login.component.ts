import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({ email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.min(6)])});
   
  hide=true;
  
  
  
  constructor() { }
  
  ngOnInit() {}

  onLogin(){}

}
