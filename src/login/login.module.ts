import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';

/* ...other imports... */

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    };
  }
}
