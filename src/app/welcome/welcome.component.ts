import { Component } from '@angular/core';
import { FronteggAuthService } from '@frontegg/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private fronteggAuthService: FronteggAuthService) {}

  loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect();
  }
}
