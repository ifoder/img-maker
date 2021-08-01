import { Image } from './../base/base.component';
import { Router } from '@angular/router';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { SlideInOutAnimation } from '../animation';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-page-img',
  templateUrl: './page-img.component.html',
  styleUrls: ['./page-img.component.scss'],
  animations: [SlideInOutAnimation],
})
export class PageImgComponent extends BaseComponent implements OnInit {
  constructor(private router: Router) {
    super();
    this.image = router.getCurrentNavigation()?.extras.state as Image;
    if (this.image)
      localStorage.setItem(
        this.localStorageFileName,
        JSON.stringify(this.image)
      );
  }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem(this.localStorageFileName)!);

    this.image = data;
  }

  navigateToUrl() {
    window.open(this.image.clickUrl);
  }
}
