import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserHolder } from '../holder/user.holder';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService) { }

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  email: string;
  password: string;


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  }


  // convenience getter for easy access to form fields
  get f() {
     return this.loginForm.controls; 
    }
 
  onSubmit() {
    
    console.log('Calling onSubmit()');

    this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

     
      this.loading = true;

      this.loginService.login(this.f.email.value, this.f.password.value)
          .pipe()
          .subscribe(
              data => {
                if (data === undefined || data === null) {
                 console.log('data from request was ' + data);
                 this.f.email.setValue('');
                 this.f.password.setValue('');
                  this.loading = false;
               


                } else {
                  console.log('redirecting to orders page');
                  UserHolder.getInstance().setUser(data);
                  this.router.navigate(['/orders']);
                }
                  
              },
              error => {
                  this.loading = false;
              });
  }

}
