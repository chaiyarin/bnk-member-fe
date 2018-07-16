import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: '',
      password: ''
    });
  }

  login() {
    this.authService.authen(this.loginForm.value)
    .subscribe(
    result => {
        this.authService.setToken(result.token);
        this.router.navigate(['/admin']);
      },
      (error: HttpErrorResponse) => alert(error.error)
    );
  }

}
