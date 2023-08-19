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
        console.log(event);
        let urls = event['url'].split('/');
        this.currentNavigation = urls[urls.length - 1];
        console.log(this.currentNavigation);
      });

    this.currentNavigation = this.router.url.split('/')[2];
  }

  isOpenNavigation: boolean = true;
  currentNavigation: string = 'workflows';

  toggleNagivation() {
    this.isOpenNavigation = !this.isOpenNavigation;
  }
}
