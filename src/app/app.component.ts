import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FronteggAppService, FronteggAuthService } from '@frontegg/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = true;
  loadingSubscription: Subscription;

  constructor(
    private router: Router,
    private fronteggAuthService: FronteggAuthService,
    private fronteggAppService: FronteggAppService
  ) {
    this.loadingSubscription = fronteggAppService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnInit(): void {
    this.fronteggAuthService.isAuthenticatedSubject.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/account']);
      }
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
