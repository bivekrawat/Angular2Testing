import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  model: any = { email: 'peter@klaven', password: 'cityslicka' };
  // loading = false;
  returnUrl = 'login';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['login'] || '/';
    this.loginService.logout();
  }


  login() {
    this.loginService.login(this.model)
      .subscribe(data => { this.router.navigate(['home']); });
  }
}
