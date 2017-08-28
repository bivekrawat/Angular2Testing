import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

/* ...other imports... */

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [HomeService]
    };
  }
}
