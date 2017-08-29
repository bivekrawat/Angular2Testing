import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  // selector: 'app-root',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  token: string = localStorage.getItem('currentUser');
}
