import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe((event: any) => {
        let urls = event['url'].split('/');
        this.currentNavigation = urls[urls.length - 1];
        this.currentSettings = this.router.url.split('/')[2];

        if (this.currentSettings == 'settings') {
          this.isOpenNavigation = true;
        }
      });

    this.currentNavigation = this.router.url.split('/')[2];
    this.currentSettings = this.router.url.split('/')[2];
    if (this.currentSettings == 'settings') {
      this.currentNavigation = this.router.url.split('/')[3];
    }
  }

  isOpenNavigation: boolean = true;
  currentNavigation: string = 'workflows';

  currentSettings: string = 'personal';

  toggleNagivation() {
    this.isOpenNavigation = !this.isOpenNavigation;
  }
}
