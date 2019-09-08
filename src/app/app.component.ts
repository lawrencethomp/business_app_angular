import {
    Component,
    Inject,
    ViewChild,
    ElementRef,
    AfterContentInit,
    AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //constructor(@Inject(DOCUMENT) private document: Document, location: Location, private router: Router){}
  title = 'app';
  route: string;



  checkLink() {
    this.route = location.pathname;
  console.log(this.route);
  }
}

