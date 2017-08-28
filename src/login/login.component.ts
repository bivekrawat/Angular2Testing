import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
})

export class LoginComponent {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }


  login() {
    console.log('inside login()');
    this.router.navigate(['home']);
    // this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
  }
}
